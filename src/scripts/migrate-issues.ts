import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем .env.local из корня проекта
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

const SONAR_URL = 'https://ct2pfqiksper.share.zrok.io';
const GITHUB_REPO = 'Personal-projects-LLC/job-tasker-v2';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface SonarQubeIssue {
  message: string;
  rule: string;
  severity: string;
  component: string;
  line: number;
}

interface SonarQubeResponse {
  issues?: SonarQubeIssue[];
}

async function getExistingIssues(): Promise<SonarQubeIssue[]> {
  try {
    const response = await axios.get<SonarQubeResponse>(
      `${SONAR_URL}/api/issues/search`,
      {
        headers: {
          Authorization: `Bearer ${process.env.SONAR_TOKEN}`,
        },
      }
    );
    console.log('SonarQube Response:', response.data);
    return response.data.issues || [];
  } catch (error) {
    console.error(
      'Ошибка при получении issues из SonarQube:',
      error instanceof Error ? error.message : String(error)
    );
    return [];
  }
}

async function createGithubIssue(issue: SonarQubeIssue): Promise<void> {
  try {
    await axios.post(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      {
        title: issue.message,
        body: `SonarQube Issue:\n\nRule: ${issue.rule}\nSeverity: ${issue.severity}\nFile: ${issue.component}\nLine: ${issue.line}\n\nDetails: ${issue.message}`,
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    console.log('Created GitHub issue for:', issue.message);
  } catch (error) {
    console.error(
      'Ошибка при создании GitHub issue:',
      error instanceof Error ? error.message : String(error)
    );
  }
}

async function migrateIssues(): Promise<void> {
  const issues = await getExistingIssues();
  console.log(`Found ${issues.length} issues to migrate`);

  for (const issue of issues) {
    await createGithubIssue(issue);
    // Небольшая задержка чтобы не превысить лимиты GitHub API
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

migrateIssues().then(() => console.log('Migration completed'));

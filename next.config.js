/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Предупреждения ESLint будут отображаться в браузере
    ignoreDuringBuilds: false,
    // Не останавливать сборку при ошибках ESLint
    ignoreBuildErrors: false,
  },
  experimental: {
    // Включаем поддержку библиотек тестирования
    esmExternals: true,
  },
}

module.exports = nextConfig

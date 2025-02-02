// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock matchMedia if not available
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    }
  }
}

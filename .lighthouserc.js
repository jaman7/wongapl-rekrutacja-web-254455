module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance', 'accessibility', 'seo', 'best-practices'],
        formFactor: 'desktop',
        screenEmulation: { disabled: true },
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

module.exports = {
  ci: {
    collect: {
      url: ['http://www.jornadacolaborativa.com.br'],
      startServerCommand: 'npm run dev',
      numberOfRuns: 1,
      settings: {
        onlyCategories: ['accessibility'],
        // this waits for entire html page loads
        maxWaitForLoad: 45 * 1000,
        // First Contentful Paint:
        // this waits for the first point where the user can see anything on the screen
        maxWaitForFcp: 60 * 1000,
        // Largest Contentful Paint:
        // this waits for the largest image or text block visible within the viewport
        maxWaitForLcp: 60 * 1000,
        emulatedFormFactor: 'desktop',
        throttlingMethod: 'simulate',
        throttling: {
          // Using a "broadband" connection type
          // Corresponds to "Dense 4G 25th percentile" in https://docs.google.com/document/d/1-p4HSp42REEA5-jCBVB6PqQcVhI1nQIblBCNKhPJUXg/edit
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0, // 0 means unset
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        }
      },
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      assertions: {
        'categories.pwa': 'off',
        'categories.seo': 'off',
        'categories.best-practices': 'off',
        'categories.accessibility': ['error', { minScore: 0.65 }]
      }
    }
  },
};
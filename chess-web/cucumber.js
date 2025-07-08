module.exports = {
  default: {
    require: ['features/step_definitions/*.cjs', 'features/support/*.cjs'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
} 
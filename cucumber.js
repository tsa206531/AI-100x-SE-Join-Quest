export default {
  default: {
    requireModule: ['@babel/register'],
    require: ['src/steps/*.js', 'src/support/*.js'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
} 
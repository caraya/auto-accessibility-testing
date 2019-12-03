const gulp = require('gulp');
const axe = require('gulp-axe-webdriver');

function checkAccessibility() {
  const options = {
    saveOutputIn: 'aXeReports/a11yReport.json',
    errorOnViolation: true,
    headless: false,
    rules: {},
    scriptTimeout: 60000,
    showOnlyViolations: false,
    tags: ['wcag2aa'],
    threshold: 0,
    urls: ['src/**/*.html'],
    verbose: false
  };
  return axe(options);
}

exports.axe = checkAccessibility;

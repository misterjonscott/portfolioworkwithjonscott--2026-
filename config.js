export default {
  // Points directly to the file we just moved
  source: ['tokens/tokens.json'],
  
  platforms: {
    css: {
      transformGroup: 'css',
      // Outputs directly into your main app directory
      buildPath: 'app/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    tailwind: {
      transformGroup: 'js',
      // Outputs a clean JSON token map into your main app directory
      buildPath: 'app/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }]
    }
  }
};
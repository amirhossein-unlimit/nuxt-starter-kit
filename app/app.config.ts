export default defineAppConfig({
  icon: {
    customize: (content: string, _name: string, prefix: string) => {
      if (prefix === 'custom') {
        return content.replace(/fill="[^"]*"/g, `fill="inherit"`);
      }
    },
  },
});

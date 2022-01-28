import '@logseq/libs';

document.body.addEventListener('click', () => {
  logseq.hideMainUI({
    restoreEditingCursor: true
  });
});

async function main() {
  const model = {
    show: () => {
      logseq.showMainUI({
        autoFocus: true,
      });
    }
  };

  logseq.provideModel(model);

  logseq.Editor.registerSlashCommand('Test', async () => {
    model.show();
  } );
}
logseq.ready(main).catch(console.error);

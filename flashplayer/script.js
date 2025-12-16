  function Run(blobURL) {
    document.getElementById("warn").style.display = "none"
      window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = {
          "openUrlMode": "confirm"
      };

      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      const container = document.getElementById("container");
      container.innerHTML = "";
      player.style.width = "100%";
      player.style.height = "100%";
      container.appendChild(player);
      player.addEventListener('loadedmetadata', () => {
        const md = player.ruffle().metadata;
          //player.setAttribute("width", md.width);
          //player.setAttribute("height", md.height);
          if(md.isActionScript3){
            document.getElementById("warn").style.display = "block"
          }
      })
      player.ruffle().load(blobURL).then((w) => {
          console.info("Loaded!")


      }).catch((e) => {
          console.error(`Ruffle failed to load the file: ${e}`);
      });

  }

  document.getElementById("file").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const blobURL = URL.createObjectURL(file);
      Run(blobURL);
  });
  document.getElementById("PC").addEventListener("click", async (e) => {
      Run("./templatefiles/papascheeseria.swf")
  });
  document.getElementById("JS").addEventListener("click", async (e) => {
      Run("./templatefiles/js.swf")
  })
  document.getElementById("PP").addEventListener("click", async (e) => {
      Run("./templatefiles/papaspastaria.swf")
  });
  document.getElementById("com").addEventListener("click", async (e) => {
      Run("./templatefiles/cmcoy.swf")
  })
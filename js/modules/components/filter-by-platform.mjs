export function setFilterLinks(basePath) {
    const filterPC = document.querySelector(".filter-pc");
    filterPC.href = `${basePath}?platform=steam`;

    const filterPlaystation = document.querySelector(".filter-playstation");
    filterPlaystation.href = `${basePath}?platform=playstation`;

    const filterXbox = document.querySelector(".filter-xbox");
    filterXbox.href = `${basePath}?platform=xbox`;
    
    const filterNintendo = document.querySelector(".filter-nintendo");
    filterNintendo.href = `${basePath}?platform=nintendo`;
  }
  export function setResponsiveFilterLinks(basePath) {
    const filterXboxResponsive = document.querySelector(".filter-xbox-responsive");
      filterXboxResponsive.href = `${basePath}?platform=xbox`;

      const filterPlaystationResponsive = document.querySelector(`.filter-playstation-responsive`);
      filterPlaystationResponsive.href = `${basePath}?platform=playstation`;

      const filterPCResponsive = document.querySelector(`.filter-pc-responsive`);
      filterPCResponsive.href = `${basePath}?platform=steam`;

      const filterNintendoResponsive = document.querySelector(`.filter-nintendo-responsive`);
      filterNintendoResponsive.href = `${basePath}?platform=nintendo`;
  }

  export function showMoreAllButtons(basePath) {
       const showMoreBestseller = document.querySelector(".show-more-bestseller");
       showMoreBestseller.href = `${basePath}?platform=gamehub`;

       const showMoreReleases = document.querySelector(".show-more-new-releases");
       showMoreReleases.href = `${basePath}?platform=gamehub`;
       
       const showAllBest = document.querySelector(".show-all-best");
       showAllBest.href = `${basePath}?platform=gamehub`;

       const showAllNew = document.querySelector(".show-all-releases");
       showAllNew.href = `${basePath}?platform=gamehub`;
  }
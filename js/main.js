let homePage = document.querySelector(".home-page"),
  kour2an = document.querySelector(".kor2an-home"),
  work = document.querySelector(".work-home"),
  publicWork = document.querySelector(".publicwork-home"),
  specialWork = document.querySelector(".specialwork-home"),
  about = document.querySelector(".about"),
  linkOne = document.querySelector(".link1"),
  linkTwo = document.querySelector(".link2"),
  linkThree = document.querySelector(".link3"),
  linkFour = document.querySelector(".link4"),
  hawlTatbik = document.querySelector(".hawl-tatbik"),
  link2One =
    ((linkOne.onclick = () => {
      (homePage.style.display = "none"), (kour2an.style.display = "block");
    }),
    (linkTwo.onclick = () => {
      (homePage.style.display = "none"), (work.style.display = "block");
    }),
    (linkThree.onclick = () => {
      (homePage.style.display = "none"), (publicWork.style.display = "block");
    }),
    (linkFour.onclick = () => {
      (homePage.style.display = "none"), (specialWork.style.display = "block");
    }),
    (hawlTatbik.onclick = () => {
      (homePage.style.display = "none"), (about.style.display = "block");
    }),
    document.querySelector(".kor2an-home .kor2an-page .kour2an .link1")),
  link2Two = document.querySelector(
    ".kor2an-home .kor2an-page .kour2an .link2"
  ),
  link2Three = document.querySelector(
    ".kor2an-home .kor2an-page .kour2an .link3"
  ),
  sourat3ankabout = document.querySelector(".sowar-kor2an .sourat-3ankabout"),
  souratRoum = document.querySelector(".sowar-kor2an .sourat-roum"),
  souratDo5an = document.querySelector(".sowar-kor2an .sourat-do5an"),
  link3One =
    ((link2One.onclick = () => {
      (kour2an.style.display = "none"),
        (sourat3ankabout.style.display = "block");
    }),
    (link2Two.onclick = () => {
      (kour2an.style.display = "none"), (souratRoum.style.display = "block");
    }),
    (link2Three.onclick = () => {
      (kour2an.style.display = "none"), (souratDo5an.style.display = "block");
    }),
    document.querySelector(".work-home .work-page .work .link1")),
  link3Two = document.querySelector(".work-home .work-page .work .link2"),
  link3Three = document.querySelector(".work-home .work-page .work .link3"),
  mawane3Koboul = document.querySelector(".mawane3-koboul"),
  sawab2e7ya2 = document.querySelector(".sawab-2e7ya2"),
  iste3dad = document.querySelector(".iste3dad"),
  link4One =
    ((link3One.onclick = () => {
      (work.style.display = "none"), (mawane3Koboul.style.display = "block");
    }),
    (link3Two.onclick = () => {
      (work.style.display = "none"), (sawab2e7ya2.style.display = "block");
    }),
    (link3Three.onclick = () => {
      (work.style.display = "none"), (iste3dad.style.display = "block");
    }),
    document.querySelector(".publicwork-page .publicwork .public .link1")),
  link4Two = document.querySelector(
    ".publicwork-page .publicwork .public .link2"
  ),
  link4Three = document.querySelector(
    ".publicwork-page .publicwork .public .link3"
  ),
  link4Four = document.querySelector(
    ".publicwork-page .publicwork .public .link4"
  ),
  link4Five = document.querySelector(
    ".publicwork-page .publicwork .public .link5"
  ),
  link4Six = document.querySelector(
    ".publicwork-page .publicwork .public .link6"
  ),
  link4Seven = document.querySelector(
    ".publicwork-page .publicwork .public .link7"
  ),
  dou3a2Iftita7 = document.querySelector(".work-public .workpublic"),
  dou3a2Sali7in = document.querySelector(".work-public .sali7in"),
  dou3a2Sadek = document.querySelector(".work-public .sadek"),
  slatRok3atain = document.querySelector(".work-public .rok3atain"),
  tawasolBelMos7af = document.querySelector(".work-public .tawasol"),
  ziyaratImamHoussein = document.querySelector(
    ".work-public .ziyarat-houssein"
  ),
  ziyaratAli2ebnHoussein = document.querySelector(
    ".work-public .ziyarat-aliebn-houssein"
  ),
  link5One =
    ((link4One.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2Iftita7.style.display = "block");
    }),
    (link4Two.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2Sali7in.style.display = "block");
    }),
    (link4Three.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2Sadek.style.display = "block");
    }),
    (link4Four.onclick = () => {
      (publicWork.style.display = "none"),
        (slatRok3atain.style.display = "block");
    }),
    (link4Five.onclick = () => {
      (publicWork.style.display = "none"),
        (tawasolBelMos7af.style.display = "block");
    }),
    (link4Six.onclick = () => {
      (publicWork.style.display = "none"),
        (ziyaratImamHoussein.style.display = "block");
    }),
    (link4Seven.onclick = () => {
      (publicWork.style.display = "none"),
        (ziyaratAli2ebnHoussein.style.display = "block");
    }),
    document.querySelector(".publicwork-page .publicwork .public .link8")),
  link5Two = document.querySelector(
    ".publicwork-page .publicwork .public .link9"
  ),
  link5Three = document.querySelector(
    ".publicwork-page .publicwork .public .link10"
  ),
  link5Four = document.querySelector(
    ".publicwork-page .publicwork .public .link11"
  ),
  link5Five = document.querySelector(
    ".publicwork-page .publicwork .public .link12"
  ),
  link5Six = document.querySelector(
    ".publicwork-page .publicwork .public .link13"
  ),
  link5Seven = document.querySelector(
    ".publicwork-page .publicwork .public .link14"
  ),
  ziyaratShohada2 = document.querySelector(".work-public .shohada2"),
  ziyaratAbalFadl = document.querySelector(".work-public .abalfadl"),
  salatMi2atRok3a = document.querySelector(".work-public .salatme2atrok3a"),
  do3a22eni2amsayt = document.querySelector(".work-public .do3a22eni2amsayt"),
  do3a2AlJawshan = document.querySelector(".work-public .aljawshan"),
  do3a2AlTawba = document.querySelector(".work-public .altawba"),
  as7arRamadan = document.querySelector(".work-public .as7arramadan"),
  link6One =
    ((link5One.onclick = () => {
      (publicWork.style.display = "none"),
        (ziyaratShohada2.style.display = "block");
    }),
    (link5Two.onclick = () => {
      (publicWork.style.display = "none"),
        (ziyaratAbalFadl.style.display = "block");
    }),
    (link5Three.onclick = () => {
      (publicWork.style.display = "none"),
        (salatMi2atRok3a.style.display = "block");
    }),
    (link5Four.onclick = () => {
      (publicWork.style.display = "none"),
        (do3a22eni2amsayt.style.display = "block");
    }),
    (link5Five.onclick = () => {
      (publicWork.style.display = "none"),
        (do3a2AlJawshan.style.display = "block");
    }),
    (link5Six.onclick = () => {
      (publicWork.style.display = "none"),
        (do3a2AlTawba.style.display = "block");
    }),
    (link5Seven.onclick = () => {
      (publicWork.style.display = "none"),
        (as7arRamadan.style.display = "block");
    }),
    document.querySelector(".publicwork-page .publicwork .public .link15")),
  link6Two = document.querySelector(
    ".publicwork-page .publicwork .public .link16"
  ),
  link6Three = document.querySelector(
    ".publicwork-page .publicwork .public .link17"
  ),
  link6Four = document.querySelector(
    ".publicwork-page .publicwork .public .link18"
  ),
  link6Five = document.querySelector(
    ".publicwork-page .publicwork .public .link19"
  ),
  link6Six = document.querySelector(
    ".publicwork-page .publicwork .public .link20"
  ),
  link6Seven = document.querySelector(
    ".publicwork-page .publicwork .public .link21"
  ),
  dou3a2AlBaha2 = document.querySelector(".work-public .baha2"),
  dou3a2AbiHamze = document.querySelector(".work-public .abyhamza"),
  dou3a2Ya3odaty = document.querySelector(".work-public .ya3odaty"),
  dou3a2Idris = document.querySelector(".work-public .idris"),
  dou3a2YaMafza3e = document.querySelector(".work-public .yamafza3e"),
  alTasbi7at = document.querySelector(".work-public .tasbi7at"),
  dou3a2MakaremAl2a5lak = document.querySelector(".work-public .makarem"),
  link7One =
    ((link6One.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2AlBaha2.style.display = "block");
    }),
    (link6Two.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2AbiHamze.style.display = "block");
    }),
    (link6Three.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2Ya3odaty.style.display = "block");
    }),
    (link6Four.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2Idris.style.display = "block");
    }),
    (link6Five.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2YaMafza3e.style.display = "block");
    }),
    (link6Six.onclick = () => {
      (publicWork.style.display = "none"), (alTasbi7at.style.display = "block");
    }),
    (link6Seven.onclick = () => {
      (publicWork.style.display = "none"),
        (dou3a2MakaremAl2a5lak.style.display = "block");
    }),
    document.querySelector(".specialwork-page .specialwork .special .link1")),
  link7Two = document.querySelector(
    ".specialwork-page .specialwork .special .link2"
  ),
  link7Three = document.querySelector(
    ".specialwork-page .specialwork .special .link3"
  ),
  tes3at3asher = document.querySelector(".tase3a-3ashar"),
  wa7edW3eshrin = document.querySelector(".wa7ed-w3eshrin"),
  imamSadek = document.querySelector(".imamsadek"),
  link8One =
    ((link7One.onclick = () => {
      (specialWork.style.display = "none"),
        (tes3at3asher.style.display = "block");
    }),
    (link7Two.onclick = () => {
      (specialWork.style.display = "none"),
        (wa7edW3eshrin.style.display = "block");
    }),
    (link7Three.onclick = () => {
      (specialWork.style.display = "none"), (imamSadek.style.display = "block");
    }),
    document.querySelector(".specialwork-page .specialwork .special .link4")),
  link8Two = document.querySelector(
    ".specialwork-page .specialwork .special .link5"
  ),
  link8Three = document.querySelector(
    ".specialwork-page .specialwork .special .link6"
  ),
  layalaWa7edW3eshrin = document.querySelector(".wa7ed-3eshrin"),
  ziyarat2amirAlMo2mnin = document.querySelector(".amiralmo2minin"),
  layalaTaletW3eshrin = document.querySelector(".talet-3eshrin"),
  link9One =
    ((link8One.onclick = () => {
      (specialWork.style.display = "none"),
        (layalaWa7edW3eshrin.style.display = "block");
    }),
    (link8Two.onclick = () => {
      (specialWork.style.display = "none"),
        (ziyarat2amirAlMo2mnin.style.display = "block");
    }),
    (link8Three.onclick = () => {
      (specialWork.style.display = "none"),
        (layalaTaletW3eshrin.style.display = "block");
    }),
    document.querySelector(".specialwork-page .specialwork .special .link7")),
  link9Two = document.querySelector(
    ".specialwork-page .specialwork .special .link8"
  ),
  link9Three = document.querySelector(
    ".specialwork-page .specialwork .special .link9"
  ),
  ziyaratSa7ebZaman = document.querySelector(".sa7ebzaman"),
  dou3a2YaBatinan = document.querySelector(".batinan"),
  salatLayl = document.querySelector(".salatlayl"),
  link10One =
    ((link9One.onclick = () => {
      (specialWork.style.display = "none"),
        (ziyaratSa7ebZaman.style.display = "block");
    }),
    (link9Two.onclick = () => {
      (specialWork.style.display = "none"),
        (dou3a2YaBatinan.style.display = "block");
    }),
    (link9Three.onclick = () => {
      (specialWork.style.display = "none"), (salatLayl.style.display = "block");
    }),
    document.querySelector(".specialwork-page .specialwork .special .link10")),
  link10Two = document.querySelector(
    ".specialwork-page .specialwork .special .link11"
  ),
  link10Three = document.querySelector(
    ".specialwork-page .specialwork .special .link12"
  ),
  dou3a2Ba3SalatWater = document.querySelector(".salatwater"),
  dou3a27azin = document.querySelector(".dou3a27azin"),
  hadisKisa2 = document.querySelector(".hadiskisa2");
(link10One.onclick = () => {
  (specialWork.style.display = "none"),
    (dou3a2Ba3SalatWater.style.display = "block");
}),
  (link10Two.onclick = () => {
    (specialWork.style.display = "none"), (dou3a27azin.style.display = "block");
  }),
  (link10Three.onclick = () => {
    (specialWork.style.display = "none"), (hadisKisa2.style.display = "block");
  });

//  click back button to go to the previous page
function goBack1() {
    homePage.style.display = "flex";
    kour2an.style.display = "none";
    }
function goBack2() {
    homePage.style.display = "flex";
    work.style.display = "none";
    }
function goBack3() {
    homePage.style.display = "flex";
    publicWork.style.display = "none";
    }
function goBack4() {
    homePage.style.display = "flex";
    specialWork.style.display = "none";
    }
function goBack5() {
    homePage.style.display = "flex";
    about.style.display = "none";
    }

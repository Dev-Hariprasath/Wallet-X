import React, { useState } from "react";
import logo from "../assets/imgs/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SideBarOpen } from "../store/atom/sideBarAtom";
import { useAuth } from "../context/AuthContext";
export const SideBar = ({ active }) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useRecoilState(SideBarOpen);
  const navigate = useNavigate();
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
        isOpen
          ? "pointer-events-all opacity-100"
          : "pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
      }`}
    >
      <div
        onClick={handleToggleModal}
        className="absolute inset-0 transition-opacity bg-gray-700 bg-opacity-75"
      ></div>
      <button
        className={`${
          isOpen ? "fixed" : "hidden"
        } top-10 right-10 w-10 lg:hidden`}
        onClick={handleToggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-10 w-10"
        >
          <g transform="translate(0 -1020.362)">
            <circle
              cx="37.045"
              cy="28.409"
              r="12.5"
              fill="#f20833"
              fillRule="evenodd"
              transform="matrix(1.28 0 0 1.28 -31.418 999.999)"
            ></circle>
            <path
              fill="#a7102c"
              d="M20.69 31.295a16 16 0 0 0 .039-.01 16 16 0 0 0 1.501-.549 16 16 0 0 0 1.44-.695 16 16 0 0 0 1.365-.836 16 16 0 0 0 1.272-.967 16 16 0 0 0 1.172-1.092 16 16 0 0 0 1.054-1.2 16 16 0 0 0 .93-1.301 16 16 0 0 0 .797-1.387 16 16 0 0 0 .652-1.461 16 16 0 0 0 .371-1.121l-9.98-9.98A7.475 7.475 0 0 0 16 8.501c-1.92 0-3.84.73-5.303 2.193-2.924 2.925-2.924 7.683 0 10.608l9.992 9.992z"
              transform="translate(0 1020.362)"
            ></path>
            <path
              fill="#ffffff"
              d="M8.498 1c-1.92 0-3.84.731-5.303 2.193-2.924 2.925-2.924 7.683 0 10.608 2.925 2.924 7.681 2.924 10.606 0 2.925-2.925 2.925-7.683 0-10.608A7.475 7.475 0 0 0 8.498 1Zm0 .994c1.662 0 3.324.635 4.596 1.906a6.494 6.494 0 0 1 0 9.194 6.491 6.491 0 0 1-9.192 0 6.48 6.48 0 0 1-1.879-5.219A6.482 6.482 0 0 1 3.903 3.9a6.478 6.478 0 0 1 4.595-1.906zm2.467 3.522a.5.5 0 0 0-.004.002.5.5 0 0 0-.342.152L8.496 7.79 6.375 5.67a.5.5 0 0 0-.357-.152.5.5 0 0 0-.35.859l2.121 2.121-2.121 2.121a.5.5 0 1 0 .707.707l2.121-2.12 2.123 2.12a.5.5 0 1 0 .707-.707l-2.12-2.121 2.12-2.121a.5.5 0 0 0-.361-.861Z"
              transform="translate(7.502 1027.865)"
            ></path>
          </g>
        </svg>
      </button>
      <div
        className={`relative mr-auto  transition-transform duration-300 items-center ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1A1A1A] justify-between -translate-x-full lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex justify-center w-fit">
          <img src={logo} alt="" className="h-[70px]]" />
        </div>
        <div className="flex flex-col w-full mb-[150px]">
          <Link to={"/dashboard"}>
            <SidebarTabs
              label={"Dashboard"}
              active={active == "Dashboard" ? true : false}
              logo={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="dashboard"
                  className="h-6 w-6 fill-current "
                >
                  <path d="M8.5 3h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0 3h-3A2.5 2.5 0 0 0 3 12.5v6A2.5 2.5 0 0 0 5.5 21h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 8.5 10zm1.5 8.5A1.5 1.5 0 0 1 8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-6A1.5 1.5 0 0 1 5.5 11h3a1.5 1.5 0 0 1 1.5 1.5zm8.5-2.5h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0-17h-3A2.5 2.5 0 0 0 13 5.5v6a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 18.5 3zm1.5 8.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5z"></path>
                </svg>
              }
            >
              {" "}
            </SidebarTabs>
          </Link>
          <Link to="/transactions">
            <SidebarTabs
              label={"Transactions"}
              active={active == "Transactions" ? true : false}
              logo={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 512 512"
                  id="transactions"
                  className="h-6 w-6 fill-current "
                >
                  <path d="M368.91016,183.8999H431.0498A35.94093,35.94093,0,0,0,467,147.9502a44.72941,44.72941,0,0,0-23.72217-39.53907l-17.237-9.18725c.0044-.19471.01923-.38892.01923-.58374V90.59351a43.38876,43.38876,0,0,0,17.3501-34.70337V43.43066a43.43067,43.43067,0,0,0-86.86133,0V55.89014A43.39245,43.39245,0,0,0,374.54,91.05811v7.582c0,.08532.007.17016.00781.25549l-17.86523,9.5155A44.81563,44.81563,0,0,0,332.96,147.9502,35.9905,35.9905,0,0,0,368.91016,183.8999Zm2.63867-128.00976V43.43066a28.42691,28.42691,0,0,1,56.78833-1.93225,43.74151,43.74151,0,0,1-22.04224.2677,42.28244,42.28244,0,0,1-11.54736-4.87256,7.49985,7.49985,0,1,0-7.793,12.81641,57.26975,57.26975,0,0,0,15.64355,6.59326,56.813,56.813,0,0,0,14.04395,1.7544,59.91444,59.91444,0,0,0,11.74316-1.18433,28.42664,28.42664,0,0,1-56.83642-.98315Zm39.51123,41.99292v.75708a10.76,10.76,0,1,1-21.52,0v-.59607a43.36948,43.36948,0,0,0,21.52-.161Zm-58.84717,34.72241a29.74544,29.74544,0,0,1,11.52295-10.95606l15.46863-8.23889a25.73052,25.73052,0,0,0,42.00976.23865l15.00647,7.99829A29.75478,29.75478,0,0,1,452,147.9502a20.94124,20.94124,0,0,1-20.9502,20.9497H368.91016A20.97379,20.97379,0,0,1,347.96,147.9502,29.83266,29.83266,0,0,1,352.21289,132.60547ZM55.84283,332.8457c.11561.06336.227.13159.34711.18946.07562.03637.15357.0614.2298.09509.119.05261.238.10217.35846.14831.174.06653.34894.12427.525.177.11823.0354.23572.07226.3548.10156.19775.04883.39606.08447.595.1167.09729.01562.19385.03711.29138.04895a7.45744,7.45744,0,0,0,.89655.058c.03839,0,.076-.00732.11438-.008a7.49665,7.49665,0,0,0,.88428-.06153c.12219-.01648.24078-.04834.36181-.0708.20838-.03857.41681-.07519.621-.1311.13007-.03553.255-.08472.38294-.1272.19006-.06311.37988-.125.56457-.20312.1283-.05445.25074-.11988.376-.1814.1756-.08594.35034-.17212.51929-.272.12488-.07386.24353-.157.36426-.23816.15783-.10608.314-.2135.46411-.33216.12018-.095.234-.19726.34863-.29992.13708-.12281.27142-.24768.40015-.3816.11248-.11682.21887-.23937.32428-.36437.11657-.13831.229-.27991.33654-.42823.09833-.1355.19135-.2749.28138-.41833.04913-.07813.10681-.14759.15344-.22815.06891-.11914.12463-.242.18628-.363.02405-.04736.05523-.08838.07837-.13647l14.46-30a7.50014,7.50014,0,0,0-13.5127-6.5127l-6.56915,13.62891a201.19685,201.19685,0,0,1-6.42889-58.6792c2.00878-53.54346,25.00634-103.33985,64.75683-140.21631,39.75049-36.876,91.13281-56.07129,144.67334-54.07031A201.76987,201.76987,0,0,1,323.9165,65.30029a7.5,7.5,0,0,0,5.043-14.12695,216.73731,216.73731,0,0,0-64.81494-12.47705C206.59375,36.5332,151.395,57.1582,108.707,96.75928S41.32129,189.8623,39.1626,247.40967a216.131,216.131,0,0,0,6.73767,62.36719L34.376,303.10938a7.49991,7.49991,0,1,0-7.51172,12.98339l28.82617,16.67774C55.74017,332.79932,55.79266,332.81812,55.84283,332.8457ZM362.79883,256A106.79883,106.79883,0,1,0,256,362.79883,106.91968,106.91968,0,0,0,362.79883,256Zm-198.59766,0A91.79883,91.79883,0,1,1,256,347.79883,91.90265,91.90265,0,0,1,164.20117,256Zm326.05615-36.34473L463.74658,199.499c-.0744-.05664-.15307-.103-.22888-.15649-.07861-.05518-.15167-.11548-.233-.16821-.02741-.01783-.05628-.03113-.0838-.04847-.11963-.07556-.24207-.1427-.36451-.21081-.09759-.05408-.19433-.11035-.29345-.15979-.12641-.063-.25507-.1178-.38379-.173-.10083-.04346-.20093-.08887-.30292-.12745-.12579-.0476-.25311-.08691-.38049-.12744-.10858-.03454-.21655-.07129-.32593-.10058-.12189-.03272-.24469-.05738-.36755-.08374-.1167-.02491-.23285-.052-.35-.07129-.11853-.01953-.23743-.03125-.35645-.04517-.122-.014-.24359-.03-.36578-.03821-.118-.00781-.23578-.00793-.35382-.01013-.12219-.00244-.2442-.00659-.36615-.00293-.12061.00354-.2403.01489-.36053.02417-.11847.00928-.23694.01636-.35474.03125-.12409.01563-.2467.03906-.36987.06079-.11194.01978-.224.03711-.33484.062-.12641.0282-.25067.06446-.37561.09913-.106.02954-.21234.05664-.317.09082-.12451.04052-.24628.08911-.36877.13623-.10224.0393-.20508.07641-.30561.12024-.11841.05163-.23346.11084-.34942.16882-.10157.05078-.20386.09936-.30329.15478-.10742.05994-.21118.127-.31591.19239-.10346.06469-.20752.12756-.30811.19751-.0946.06579-.1853.13806-.27722.20861-.105.08045-.21045.15992-.31165.24646-.0824.07044-.16064.14686-.24042.22144-.10333.09644-.2066.19238-.305.29541-.07452.078-.14465.16162-.21637.24365-.09448.10779-.1889.21521-.27789.32959-.01935.02478-.04126.04639-.06037.07154-.05651.07421-.1029.15283-.15618.22851-.05536.07861-.11573.15186-.16852.2334l-18.103,27.95264a7.49994,7.49994,0,1,0,12.58984,8.15429l8.17517-12.62317a202.2115,202.2115,0,0,1,2.37415,26.3263c1.28418,53.56592-18.61133,104.68066-56.022,143.9292-37.41016,39.248-87.51319,61.57031-141.07862,62.854a201.82359,201.82359,0,0,1-54.28222-6.08594,7.50015,7.50015,0,0,0-3.67188,14.54395,217.01041,217.01041,0,0,0,53.11328,6.6001q2.59936,0,5.2002-.062c57.57129-1.38038,111.40234-25.35254,151.57715-67.501s61.54-97.06641,60.16015-154.6377a217.235,217.235,0,0,0-2.41247-27.34192l10.64685,8.09485a7.49977,7.49977,0,1,0,9.07812-11.94043Zm-334.93945,216.856-17.237-9.18726c.0044-.1947.01923-.38891.01923-.58374v-8.04785a43.3884,43.3884,0,0,0,17.35107-34.7041V371.52881a43.43066,43.43066,0,1,0-86.86133,0v12.45947a43.39238,43.39238,0,0,0,17.99024,35.16724v7.58471c0,.08533.007.17017.00781.2555l-17.86963,9.51794A44.81383,44.81383,0,0,0,45,476.0498,35.9906,35.9906,0,0,0,80.9502,512h62.13964A35.941,35.941,0,0,0,179.04,476.0498,44.71378,44.71378,0,0,0,155.31787,436.51123Zm-71.728-52.523V371.52881a28.42689,28.42689,0,0,1,56.78833-1.93176,43.74579,43.74579,0,0,1-22.04174.2677,42.286,42.286,0,0,1-11.54737-4.87256,7.50009,7.50009,0,1,0-7.79394,12.8164,56.86044,56.86044,0,0,0,29.68847,8.34717,59.91329,59.91329,0,0,0,11.74262-1.18408,28.42662,28.42662,0,0,1-56.83637-.9834Zm39.51026,41.99317v.75878a10.76,10.76,0,1,1-21.52,0V426.142a43.36909,43.36909,0,0,0,21.52-.16052Zm34.80664,64.88525A20.81533,20.81533,0,0,1,143.08984,497H80.9502A20.97421,20.97421,0,0,1,60,476.0498a29.81627,29.81627,0,0,1,15.77588-26.30029L91.24573,441.51a25.72893,25.72893,0,0,0,42.00854.23926l15.00843,7.99927A29.74243,29.74243,0,0,1,164.04,476.0498,20.81533,20.81533,0,0,1,157.90674,490.8667ZM268.501,320.37891a7.5,7.5,0,0,0,5.42236-12.68018l-28.50049-29.83935A37.60547,37.60547,0,0,0,275.23712,248.5H283.5a7.5,7.5,0,0,0,0-15h-8.25464a37.3438,37.3438,0,0,0-6.76575-15H283.5a7.5,7.5,0,0,0,0-15h-55a7.5,7.5,0,0,0,0,15h10a22.53524,22.53524,0,0,1,21.21,15H228.5a7.5,7.5,0,0,0,0,15h31.21a22.53524,22.53524,0,0,1-21.21,15h-10a7.5,7.5,0,0,0-5.42334,12.68018l40,41.8789A7.47734,7.47734,0,0,0,268.501,320.37891Z"></path>
                </svg>
              }
            ></SidebarTabs>
          </Link>

          <Link to={"/settings"}>
            <SidebarTabs
              label={"Settings"}
              active={active == "Settings" ? true : false}
              logo={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current "
                  viewBox="0 0 72 72"
                  id="settings"
                >
                  <path d="M35.649 45.188c-5.066 0-9.188-4.121-9.188-9.188 0-5.066 4.121-9.188 9.188-9.188 5.065 0 9.188 4.122 9.188 9.188 0 5.067-4.122 9.188-9.188 9.188zm0-14.376c-2.86 0-5.188 2.327-5.188 5.188s2.327 5.188 5.188 5.188 5.188-2.327 5.188-5.188-2.327-5.188-5.188-5.188z"></path>
                  <path d="M35.913 68.5h-.193c-3.65 0-6.958-2.748-8.125-6.572a26.936 26.936 0 0 1-4.536-1.881c-1.498.842-3.155 1.297-4.777 1.297-2.091 0-4.015-.773-5.418-2.177l-.172-.182c-2.541-2.54-2.924-6.823-1.034-10.357-.752-1.44-1.274-2.976-1.768-4.585-3.83-1.157-6.39-4.326-6.39-7.92v-.193c0-3.607 2.558-6.795 6.384-7.966.519-1.718 1.103-3.29 1.876-4.755-1.943-3.501-1.652-7.604.887-10.144l.126-.139c1.462-1.462 3.494-2.269 5.731-2.269a9.97 9.97 0 0 1 4.717 1.211 26.967 26.967 0 0 1 4.236-1.753C28.459 6.262 31.806 3.5 35.72 3.5h.193c3.859 0 7.03 2.714 7.96 6.625a27.035 27.035 0 0 1 4.288 1.783 9.117 9.117 0 0 1 4.597-1.262c2.262 0 4.368.86 5.931 2.422l.103.095c2.772 2.771 3.104 6.936 1.002 10.354.73 1.394 1.436 2.813 1.897 4.242 3.905.924 6.81 4.232 6.81 8.171v.193c0 3.918-2.906 7.207-6.815 8.121-.438 1.333-1.068 2.691-1.781 4.062 2.063 3.443 1.637 7.79-1.157 10.585l-.146.213C57.103 60.6 55.098 61.5 52.983 61.5h.002c-1.601 0-3.214-.549-4.656-1.42-1.47.779-3.003 1.38-4.583 1.873-1.083 3.885-4.215 6.547-7.833 6.547zm-12.93-12.781c.349 0 .697.09 1.01.273a23.03 23.03 0 0 0 5.78 2.4c.76.198 1.333.824 1.465 1.598.431 2.529 2.399 4.51 4.481 4.51h.193c2.282 0 3.818-2.252 4.155-4.477a1.997 1.997 0 0 1 1.47-1.635 23.038 23.038 0 0 0 5.891-2.465 2 2 0 0 1 2.282.169c.989.806 2.153 1.249 3.277 1.25a3.837 3.837 0 0 0 2.768-1.145l.133-.134c1.654-1.654 1.683-4.389.066-6.361a2 2 0 0 1-.189-2.258c1.075-1.887 1.856-3.732 2.323-5.488.217-.817 1.029-1.41 1.872-1.48 2.569-.213 4.539-2.045 4.539-4.354v-.193c0-2.336-1.971-4.189-4.542-4.408-.841-.071-1.6-.663-1.816-1.479-.504-1.899-1.333-3.802-2.41-5.654a1.999 1.999 0 0 1 .174-2.279c1.648-1.997 1.688-4.496.106-6.078l-.104-.095a4.389 4.389 0 0 0-3.147-1.292c-1.151 0-2.298.414-3.229 1.164a2 2 0 0 1-2.261.172 23.015 23.015 0 0 0-5.671-2.355 2 2 0 0 1-1.479-1.742c-.249-2.58-1.978-4.383-4.207-4.383h-.193c-2.313 0-4.264 1.895-4.535 4.407a2.002 2.002 0 0 1-1.477 1.719 22.995 22.995 0 0 0-5.562 2.291 1.996 1.996 0 0 1-2.165-.112c-1.011-.729-2.28-1.146-3.482-1.146-1.169 0-2.203.391-2.912 1.1l-.14.139c-1.6 1.6-1.107 4.267.206 6.074.471.647.511 1.513.101 2.2-1.046 1.755-1.841 3.707-2.431 5.965-.197.755-.71 1.326-1.479 1.463-2.536.452-4.344 2.314-4.344 4.331v.193c0 1.996 1.806 3.835 4.34 4.279.771.135 1.339.707 1.537 1.465.547 2.094 1.319 4.047 2.348 5.805a2 2 0 0 1-.109 2.168c-1.491 2.098-1.515 4.893-.045 6.362l.168.181c.787.786 1.821.961 2.544.961 1.171 0 2.452-.451 3.515-1.235.351-.26.767-.391 1.185-.391z"></path>
                  <path d="M52.704 30.489a1 1 0 01-.934-.642c-2.54-6.612-9.007-11.054-16.092-11.055a1 1 0 110-2c7.906 0 15.124 4.958 17.959 12.338a1.001 1.001 0 01-.933 1.359zM18.936 44.918a1 1 0 01-.857-.484c-.199-.33-.288-.574-.448-1.02-.077-.211-.175-.483-.318-.857a.999.999 0 111.867-.717c.149.39.252.674.331.894.146.401.188.513.281.667a1 1 0 01-.856 1.517zM35.271 54.895a19.202 19.202 0 01-14.711-6.843.999.999 0 111.529-1.289 17.21 17.21 0 0013.182 6.132 1 1 0 010 2z"></path>
                </svg>
              }
            ></SidebarTabs>
          </Link>
        </div>
        <div
          className="flex justify-start px-5 w-full pb-8 items-center"
          onClick={() => {
            logout();
            navigate("/signin");
            window.location.reload();
          }}
        >
          <button className="flex justify-center items-center text-[#757575] hover:text-red-400">
            {" "}
            <div className="h-10 w-10 flex justify-center  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[22px] w-[22px] fill-current "
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>{" "}
            <div>Log out</div>
          </button>
        </div>
      </div>
    </aside>
  );
};

const SidebarTabs = ({ logo, label, active }) => {
  return (
    <div
      className={`flex gap-1 px-4 py-3 justify-start cursor-pointer hover:text-yellow-100 items-center ${
        active ? "text-white" : "text-[#757575]"
      } `}
    >
      <div className="h-10 w-10 flex justify-center fill-current after:	  items-center">
        {logo}
      </div>
      <div>{label}</div>
    </div>
  );
};

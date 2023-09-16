import LoadingTypeWriter from "./components/LoadingTypeWriter/LoadingTypeWriter";


export default function Home() {
  return (
    <div className='bg-gray-900 text-white h-[100vh] w-full flex flex-col justify-center items-center'>
      <svg className='h-[30%] w-auto' width="869" height="600" viewBox="0 0 869 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect preserveAspectRatio="meet" x="310" width="95" height="600" rx="47.5" fill="black">
          <animate attributeName="height" from="0" to="600" offset="3s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="1" y="353" width="100" height="255" rx="50" transform="rotate(-90 1 353)" fill="black">
          <animate attributeName="height" from="0" to="255" offset="2s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="405" width="95" height="600" rx="47.5" fill="#00D2BE">
          <animate attributeName="height" from="0" to="600" offset="4s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="774" width="95" height="600" rx="47.5" fill="#00D2BE" >
          <animate attributeName="height" from="0" to="600" offset="5s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="405" width="95" height="600" rx="47.5" fill="#00D2BE">
          <animate attributeName="height" from="0" to="600" offset="6s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="110" y="349" width="108.6" height="53" transform="rotate(-180 110 349)" fill="black" >
          <animate attributeName="height" from="0" to="53" offset="1s" dur="1s" fill="freeze" />
        </rect>
        <rect preserveAspectRatio="meet" x="566" y="347" width="95" height="228" rx="20" transform="rotate(-90 566 347)" fill="#00D2BE">
          <animate attributeName="height" from="0" to="228" offset={12} dur="1s" fill="freeze" />
        </rect>
        <path className="curve" d="M251.262 581.37C218.636 581.544 186.294 575.664 156.081 564.065C125.868 552.466 98.3764 535.375 75.1757 513.767C51.975 492.16 33.5196 466.46 20.8631 438.134C8.20664 409.808 1.59703 379.411 1.41164 348.68L110.13 348.098C110.234 365.381 113.952 382.476 121.07 398.406C128.187 414.336 138.567 428.79 151.615 440.942C164.662 453.093 180.123 462.705 197.115 469.229C214.106 475.752 232.296 479.059 250.644 478.961L251.262 581.37Z" />
      </svg>

      <LoadingTypeWriter/>
      
    </div>
  )
}

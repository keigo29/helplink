import f1 from '../../images/f1.png';
import f2 from '../../images/f2.png';
import f3 from '../../images/f3.png';
export default function Flow() {
    return (
<section class="text-gray-600 body-font " >
<h1 class="text-3xl font-bold title-font text-sky-600 mb-12 text-center">ご利用の流れ</h1>
  <div class="container px-5 py-5 mx-auto flex flex-wrap ">
    
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-600 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-sky-100 text-sky-500 rounded-full inline-flex items-center justify-center">
        <img src={f1}/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-bold title-font text-sky-600 mb-1 text-xl">お問い合わせ</h2>
          <p class="leading-relaxed">
          何かご質問やお手伝いできることがございましたら、お気軽にお問い合わせください。
            </p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-600 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-sky-100 text-sky-500 rounded-full inline-flex items-center justify-center">
        <img src={f2}/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-bold title-font text-sky-600 mb-1 text-xl">日程調整/料金相談</h2>
          <p class="leading-relaxed">
          ご希望の日程や具体的なサービス内容、予算についてお知らせいただければ、それに基づいて調整や提案をさせていただきます。
            </p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-600 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-sky-100 text-sky-500 rounded-full inline-flex items-center justify-center">
      <img src={f3}/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-bold title-font text-sky-600 mb-1 text-xl">生活のお助け</h2>
          <p class="leading-relaxed">
          家事や日常のタスクの軽減、スケジュールの調整、情報提供など、お客様の生活を円滑にするために全力でサポートいたします。
            </p>
        </div>
      </div>
    </div>
    {/* <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-sky-600 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-sky-100 text-sky-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div> */}
  </div>
</section>
)}
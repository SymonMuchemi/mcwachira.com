import { Service } from '@/types/types'
const ServicesData: Service[] = [
    {
      id: 1,
      icon: (
        <svg width="66" height="66" viewBox="0 0 66 66" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="5.5" width="65" height="55" rx="15.5" stroke="#0F172A"/>
        <path opacity="0.4" d="M18.2045 38.0909C17.9242 38.0909 17.6837 37.9905 17.483 37.7898C17.2822 37.589 17.1818 37.3485 17.1818 37.0682C17.1818 36.7879 17.2822 36.5473 17.483 36.3466C17.6837 36.1458 17.9242 36.0455 18.2045 36.0455C18.4848 36.0455 18.7254 36.1458 18.9261 36.3466C19.1269 36.5473 19.2273 36.7879 19.2273 37.0682C19.2273 37.2538 19.1799 37.4242 19.0852 37.5795C18.9943 37.7348 18.8712 37.8598 18.7159 37.9545C18.5644 38.0455 18.3939 38.0909 18.2045 38.0909ZM24.2017 38.2045C23.6487 38.2045 23.1468 38.1004 22.696 37.892C22.2453 37.6799 21.8873 37.375 21.6222 36.9773C21.357 36.5758 21.2244 36.0909 21.2244 35.5227C21.2244 35.0227 21.3229 34.6174 21.5199 34.3068C21.7169 33.9924 21.9801 33.7462 22.3097 33.5682C22.6392 33.3902 23.0028 33.2576 23.4006 33.1705C23.8021 33.0795 24.2055 33.0076 24.6108 32.9545C25.1411 32.8864 25.571 32.8352 25.9006 32.8011C26.2339 32.7633 26.4763 32.7008 26.6278 32.6136C26.7831 32.5265 26.8608 32.375 26.8608 32.1591V32.1136C26.8608 31.553 26.7074 31.1174 26.4006 30.8068C26.0975 30.4962 25.6373 30.3409 25.0199 30.3409C24.3797 30.3409 23.8778 30.4811 23.5142 30.7614C23.1506 31.0417 22.8949 31.3409 22.7472 31.6591L21.4744 31.2045C21.7017 30.6742 22.0047 30.2614 22.3835 29.9659C22.7661 29.6667 23.1828 29.4583 23.6335 29.3409C24.0881 29.2197 24.535 29.1591 24.9744 29.1591C25.2547 29.1591 25.5767 29.1932 25.9403 29.2614C26.3078 29.3258 26.6619 29.4602 27.0028 29.6648C27.3475 29.8693 27.6335 30.178 27.8608 30.5909C28.0881 31.0038 28.2017 31.5568 28.2017 32.25V38H26.8608V36.8182H26.7926C26.7017 37.0076 26.5502 37.2102 26.3381 37.4261C26.1259 37.642 25.8438 37.8258 25.4915 37.9773C25.1392 38.1288 24.7093 38.2045 24.2017 38.2045ZM24.4062 37C24.9366 37 25.3835 36.8958 25.7472 36.6875C26.1146 36.4792 26.3911 36.2102 26.5767 35.8807C26.7661 35.5511 26.8608 35.2045 26.8608 34.8409V33.6136C26.804 33.6818 26.679 33.7443 26.4858 33.8011C26.2964 33.8542 26.0767 33.9015 25.8267 33.9432C25.5805 33.9811 25.34 34.0152 25.1051 34.0455C24.8741 34.072 24.6866 34.0947 24.5426 34.1136C24.1941 34.1591 23.8684 34.233 23.5653 34.3352C23.2661 34.4337 23.0237 34.5833 22.8381 34.7841C22.6563 34.9811 22.5653 35.25 22.5653 35.5909C22.5653 36.0568 22.7377 36.4091 23.0824 36.6477C23.4309 36.8826 23.8722 37 24.4062 37ZM30.6491 41.2727V29.2727H31.9446V30.6591H32.1037C32.2022 30.5076 32.3385 30.3144 32.5128 30.0795C32.6908 29.8409 32.9446 29.6288 33.2741 29.4432C33.6075 29.2538 34.0582 29.1591 34.6264 29.1591C35.3613 29.1591 36.009 29.3428 36.5696 29.7102C37.1302 30.0777 37.5677 30.5985 37.8821 31.2727C38.1965 31.947 38.3537 32.7424 38.3537 33.6591C38.3537 34.5833 38.1965 35.3845 37.8821 36.0625C37.5677 36.7367 37.1321 37.2595 36.5753 37.6307C36.0185 37.9981 35.3764 38.1818 34.6491 38.1818C34.0885 38.1818 33.6397 38.089 33.3026 37.9034C32.9654 37.714 32.706 37.5 32.5241 37.2614C32.3423 37.0189 32.2022 36.8182 32.1037 36.6591H31.9901V41.2727H30.6491ZM31.9673 33.6364C31.9673 34.2955 32.0639 34.8769 32.2571 35.3807C32.4503 35.8807 32.7325 36.2727 33.1037 36.5568C33.4749 36.8371 33.9295 36.9773 34.4673 36.9773C35.0279 36.9773 35.4957 36.8295 35.8707 36.5341C36.2495 36.2348 36.5336 35.8333 36.723 35.3295C36.9162 34.822 37.0128 34.2576 37.0128 33.6364C37.0128 33.0227 36.9181 32.4697 36.7287 31.9773C36.5431 31.4811 36.2609 31.089 35.8821 30.8011C35.5071 30.5095 35.0355 30.3636 34.4673 30.3636C33.9219 30.3636 33.4635 30.5019 33.0923 30.7784C32.7211 31.0511 32.4408 31.4337 32.2514 31.9261C32.062 32.4148 31.9673 32.9848 31.9673 33.6364ZM40.3991 41.2727V29.2727H41.6946V30.6591H41.8537C41.9522 30.5076 42.0885 30.3144 42.2628 30.0795C42.4408 29.8409 42.6946 29.6288 43.0241 29.4432C43.3575 29.2538 43.8082 29.1591 44.3764 29.1591C45.1113 29.1591 45.759 29.3428 46.3196 29.7102C46.8802 30.0777 47.3177 30.5985 47.6321 31.2727C47.9465 31.947 48.1037 32.7424 48.1037 33.6591C48.1037 34.5833 47.9465 35.3845 47.6321 36.0625C47.3177 36.7367 46.8821 37.2595 46.3253 37.6307C45.7685 37.9981 45.1264 38.1818 44.3991 38.1818C43.8385 38.1818 43.3897 38.089 43.0526 37.9034C42.7154 37.714 42.456 37.5 42.2741 37.2614C42.0923 37.0189 41.9522 36.8182 41.8537 36.6591H41.7401V41.2727H40.3991ZM41.7173 33.6364C41.7173 34.2955 41.8139 34.8769 42.0071 35.3807C42.2003 35.8807 42.4825 36.2727 42.8537 36.5568C43.2249 36.8371 43.6795 36.9773 44.2173 36.9773C44.7779 36.9773 45.2457 36.8295 45.6207 36.5341C45.9995 36.2348 46.2836 35.8333 46.473 35.3295C46.6662 34.822 46.7628 34.2576 46.7628 33.6364C46.7628 33.0227 46.6681 32.4697 46.4787 31.9773C46.2931 31.4811 46.0109 31.089 45.6321 30.8011C45.2571 30.5095 44.7855 30.3636 44.2173 30.3636C43.6719 30.3636 43.2135 30.5019 42.8423 30.7784C42.4711 31.0511 42.1908 31.4337 42.0014 31.9261C41.812 32.4148 41.7173 32.9848 41.7173 33.6364Z" fill="white"/>
        </svg>
        
      ),
      title: "Web,Mobile & SaaS Applications",
      paragraph:
        "I specialize in building custom web and mobile applications tailored to the specific requirement of the user while considering user experience,scalability,and security.",
    },
    {
      id: 1,
      icon: (
  <svg width="66" height="66" viewBox="0 0 66 66"  className="fill-current" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="7.5" width="65" height="51" rx="3.5" stroke="rgb(15,2,60)"/>
    <rect x="8" y="27" width="20" height="18" rx="2" stroke="rgb(15,2,60)" stroke-width="1.5"/>
    <line x1="36" y1="28.25" x2="58" y2="28.25" stroke="rgb(15,2,60)" stroke-width="1.5"/>
    <line x1="4.37114e-08" y1="19.5" x2="66" y2="19.5" stroke="rgb(15,2,60)"/>
    <line x1="36" y1="33.25" x2="55" y2="33.25" stroke="rgb(15,2,60)" stroke-width="1.5"/>
    <line x1="36" y1="38.25" x2="47" y2="38.25" stroke="rgb(15,2,60)" stroke-width="1.5"/>
    <line x1="36" y1="43.25" x2="55" y2="43.25" stroke="rgb(15,2,60)" stroke-width="1.5"/>
    <circle cx="5.5" cy="13.5" r="1.5" fill="rgb(15,2,60)"/>
    <circle cx="11.5" cy="13.5" r="1.5" fill="rgb(15,2,60)"/>
    <circle cx="17.5" cy="13.5" r="1.5" fill="rgb(15,2,60)"/>
  </svg>
  
      ),
      title: "Website Development",
      paragraph:
        "Build beautiful and fast loading websites while incorporating search engine optimization (SEO) best practices.",
    },
    {
      id: 2,
      icon: (
  <svg className="fill-current" width="52" height="52" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M51.6 22.5996C50.9 22.4996 50.3 22.1996 49.6 21.9996C49.7 21.5996 49.7 21.1996 49.9 20.5996C51.3 13.3996 50.3 7.69964 47.1 5.69964C43.9 3.89964 38.7 5.79964 33.5 10.2996C33.1 10.6996 32.4 11.0996 32 11.6996C31.7 11.3996 31.3 11.0996 31 10.6996C25.5 5.79964 20.1 3.79964 16.7 5.69964C13.5 7.49964 12.5 12.9996 13.9 19.6996C14 20.3996 14.2 21.0996 14.3 21.6996C13.6 21.7996 12.8 22.0996 12.1 22.3996C5.6 24.6996 1 28.3996 1 31.8996C1 35.6996 5.9 39.4996 12.6 41.6996C13.2 41.7996 13.7 42.0996 14.3 42.0996C14.2 42.7996 13.9 43.4996 13.9 44.2996C12.6 50.8996 13.6 56.1996 16.8 57.9996C20 59.9996 25.6 57.9996 30.8 53.1996C31.2 52.7996 31.6 52.4996 32.1 52.0996C32.5 52.4996 33.2 53.0996 33.8 53.4996C38.8 57.9996 44 59.7996 47.3 57.9996C50.5 55.9996 51.6 50.3996 50.2 43.3996C50.1 42.9996 50.1 42.2996 49.8 41.6996C50.2 41.5996 50.5 41.5996 50.9 41.2996C57.9 39.1996 63 35.3996 63 31.5996C62.9 28.4996 58.1 24.8996 51.6 22.5996ZM35.2 12.3996C39.7 8.49964 43.9 7.09964 45.9 8.09964C47.9 9.19964 48.7 13.9996 47.4 20.2996C47.3 20.6996 47.3 20.9996 47.1 21.5996C44.4 20.9996 41.8 20.4996 39 20.2996C37.5 18.0996 35.8 15.7996 34 13.9996C34.4 13.1996 34.8 12.7996 35.2 12.3996ZM21.3 38.2996C21.9 39.3996 22.6 40.3996 23.3 41.3996C21.3 41.2996 19.5 40.9996 17.7 40.5996C18.1 38.8996 18.8 37.0996 19.7 35.2996C20.1 36.1996 20.8 37.3996 21.3 38.2996ZM17.7 23.8996C19.4 23.4996 21.2 23.1996 23.2 22.8996C22.5 23.8996 21.9 24.8996 21.4 25.9996C20.9 27.0996 20.3 27.9996 19.7 29.1996C18.8 27.2996 18.3 25.5996 17.7 23.8996ZM20.9 32.1996C21.6 30.4996 22.6 28.9996 23.6 27.2996C24.6 25.5996 25.6 24.0996 26.5 22.4996C28.3 22.3996 30.1 22.3996 32 22.3996C33.8 22.3996 35.8 22.4996 37.5 22.4996C38.6 23.9996 39.5 25.5996 40.4 27.0996C41.4 28.5996 42.2 30.2996 43.1 31.9996C42.4 33.6996 41.4 35.1996 40.4 36.8996C39.4 38.5996 38.4 40.0996 37.5 41.6996C35.7 41.7996 33.9 41.7996 31.9 41.7996C29.9 41.7996 28.1 41.6996 26.4 41.6996C25.3 40.1996 24.4 38.5996 23.5 36.8996C22.6 35.1996 21.8 33.8996 20.9 32.1996ZM42.7 38.2996C43.3 37.1996 43.8 36.1996 44.4 35.0996C45.1 36.7996 45.8 38.5996 46.4 40.3996C44.6 40.7996 42.6 41.0996 40.6 41.3996C41.4 40.3996 42.1 39.2996 42.7 38.2996ZM44.5 29.0996C43.9 27.9996 43.4 26.9996 42.8 25.8996C42.2 24.7996 41.5 23.8996 41 22.9996C43 23.2996 44.8 23.5996 46.5 23.9996C45.9 25.6996 45.2 27.3996 44.5 29.0996ZM32 15.5996C33.3 16.9996 34.4 18.3996 35.5 19.8996C33.1 19.7996 30.7 19.7996 28.3 19.8996C29.6 18.2996 30.9 16.8996 32 15.5996ZM18 8.19964C20 7.09964 24.6 8.59964 29.2 12.9996C29.5 13.2996 29.8 13.5996 30.2 13.7996C28.4 15.7996 26.7 17.9996 25 20.0996C22.3 20.3996 19.5 20.7996 16.9 21.3996C16.8 20.7996 16.6 20.0996 16.5 19.5996C15.4 13.6996 16.1 9.29964 18 8.19964ZM15.2 39.9996C14.8 39.8996 14.2 39.6996 13.7 39.5996C11 38.8996 8.2 37.4996 6 35.7996C4.6 34.7996 3.9 33.5996 3.6 32.1996C3.6 29.9996 7.5 27.1996 13 25.1996C13.7 24.8996 14.4 24.7996 15.1 24.4996C15.9 27.1996 16.9 29.6996 18 32.1996C17 34.6996 15.9 37.1996 15.2 39.9996ZM29.1 51.6996C27.1 53.4996 24.8 54.8996 22.2 55.8996C20.8 56.5996 19.3 56.5996 18 55.9996C16 54.8996 15.3 50.6996 16.3 44.8996C16.4 44.1996 16.6 43.4996 16.7 42.8996C19.4 43.4996 22.2 43.8996 24.8 43.9996C26.3 46.1996 28.2 48.4996 30 50.4996C29.9 51.0996 29.5 51.3996 29.1 51.6996ZM32.1 48.8996C30.8 47.4996 29.7 46.0996 28.5 44.5996C29.6 44.5996 30.7 44.6996 32 44.6996C33.3 44.6996 34.5 44.6996 35.6 44.5996C34.5 45.8996 33.4 47.2996 32.1 48.8996ZM47.9 52.3996C47.8 53.7996 47.1 55.2996 45.9 56.1996C43.9 57.2996 39.9 55.8996 35.5 51.9996C35.1 51.5996 34.5 51.1996 34 50.5996C35.8 48.5996 37.5 46.3996 39 44.0996C41.8 43.9996 44.5 43.3996 47.1 42.7996C47.2 43.1996 47.2 43.7996 47.4 44.1996C48.1 46.9996 48.1 49.7996 47.9 52.3996ZM50.1 39.4996C49.8 39.5996 49.4 39.5996 49 39.7996C48.2 37.0996 47 34.5996 45.9 32.0996C47 29.6996 48 27.0996 48.8 24.4996C49.5 24.5996 50.1 24.8996 50.6 25.0996C56.2 27.0996 60.1 29.8996 60.1 32.0996C60.2 34.3996 56.1 37.4996 50.1 39.4996ZM32 37.5996C35.1 37.5996 37.5 35.0996 37.5 32.0996C37.5 29.0996 35 26.5996 32 26.5996C29.1 26.5996 26.5 29.0996 26.5 32.0996C26.5 35.0996 28.9 37.5996 32 37.5996Z"/></svg>
      ),
      title: "React Development",
      paragraph:
        "Using React I focus on delivering tailored web applications with a strong emphasis on user experience, functionality, and maintainability. ",
    },
    {
      id: 3,
      icon: (
  <svg className="fill-current"  width="52" height="52" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M14.6289 32.5562L32.3454 2L50.0653 32.5562L32.3454 43.4432L14.6289 32.5562Z"/><path d="M14.6289 36.0498L32.3454 62L50.0751 36.0498L32.3454 46.93L14.6289 36.0498Z"/></svg>
      ),
      title: "Blockchain & Cryptocurrency Development",
      paragraph:
        "Designing and coding smart contracts and decentralized applications(Dapps)",
    },
    {
      id: 4,
      icon: (
     <svg className="fill-current" width="52" height="52" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M18.5012 26.9001C18.5012 29.1001 19.6012 30.1001 19.6012 30.7001C19.6012 31.0001 19.5012 31.1001 19.2012 31.3001L17.9012 32.1001C17.8012 32.2001 17.5012 32.2001 17.3012 32.2001C17.3012 32.2001 16.5012 32.3001 15.3012 29.7001C13.9012 31.5001 11.6012 32.7001 9.30117 32.5001C7.80117 32.6001 3.50117 31.7001 3.70117 27.0001C3.60117 23.3001 6.90117 21.0001 10.6012 21.2001C11.3012 21.2001 12.7012 21.2001 15.1012 21.8001V20.3001C15.4012 17.8001 13.7012 15.8001 10.7012 16.1001C10.6012 16.1001 8.90117 16.1001 6.20117 17.1001C5.50117 17.5001 5.50117 17.5001 5.20117 17.5001C4.50117 17.5001 4.80117 15.5001 4.90117 15.1001C5.30117 14.5001 8.40117 13.4001 11.2012 13.4001C13.2012 13.3001 15.1012 13.8001 16.7012 15.1001C18.0012 16.5001 18.5012 18.3001 18.4012 20.2001L18.5012 26.9001ZM10.0012 30.0001C13.1012 30.0001 14.5012 28.0001 14.8012 27.0001C14.9012 26.0001 14.9012 25.5001 14.9012 24.3001C13.9012 24.2001 12.5012 23.9001 11.0012 23.9001C9.60117 23.8001 6.80117 24.5001 6.90117 27.0001C7.10117 28.8001 8.20117 30.1001 10.0012 30.0001ZM26.6012 32.2001C25.8012 32.3001 25.5012 31.8001 25.3012 31.2001L20.5012 15.3001C20.4012 15.0001 20.4012 14.7001 20.4012 14.5001C20.4012 14.2001 20.5012 14.1001 20.8012 14.1001C20.8012 14.1001 20.7012 14.1001 22.9012 14.1001C23.7012 14.0001 24.0012 14.7001 24.2012 15.1001L27.7012 28.7001L31.0012 15.1001C31.1012 14.8001 31.3012 14.0001 32.3012 14.1001H34.0012C34.1012 14.1001 35.1012 14.1001 35.3012 15.1001L38.5012 28.9001L42.0012 15.1001C42.0012 15.0001 42.3012 14.0001 43.3012 14.1001H45.3012C45.4012 14.1001 45.9012 14.0001 45.7012 14.9001C45.7012 15.0001 46.0012 13.8001 40.6012 31.3001C40.5012 31.9001 40.2012 32.4001 39.3012 32.3001H37.5012C36.4012 32.4001 36.2012 31.3001 36.2012 31.2001L32.7012 18.0001L29.5012 31.2001C29.5012 31.3001 29.4012 32.3001 28.2012 32.3001H26.7012V32.2001H26.6012ZM53.0012 32.8001C52.4012 32.8001 49.8012 32.8001 47.5012 31.7001C47.1012 31.6001 46.7012 31.0001 46.7012 30.6001V29.5001C46.7012 28.7001 47.3012 28.8001 47.5012 28.9001C48.5012 29.3001 49.0012 29.6001 50.3012 29.9001C53.8012 30.7001 55.4012 29.8001 55.8012 29.5001C57.1012 28.7001 57.2012 27.0001 56.2012 26.1001C55.2012 25.3001 54.8012 25.3001 51.1012 24.1001C50.8012 23.9001 47.0012 22.7001 47.0012 19.0001C46.9012 16.3001 49.4012 13.5001 53.7012 13.5001C55.0012 13.5001 58.2012 13.9001 59.2012 15.0001C59.3012 15.1001 59.3012 15.4001 59.3012 15.7001V16.7001C59.3012 17.1001 59.2012 17.4001 58.9012 17.4001C58.1012 17.3001 56.9012 16.3001 54.1012 16.3001C53.4012 16.3001 50.2012 16.4001 50.4012 18.7001C50.4012 20.5001 53.1012 21.2001 53.4012 21.4001C56.9012 22.5001 58.2012 22.7001 59.4012 24.4001C61.1012 26.5001 60.2012 29.0001 59.8012 29.7001C57.9012 33.2001 53.2012 32.8001 53.0012 32.8001ZM57.0012 43.0001C50.3012 47.9001 40.4012 50.6001 32.1012 50.6001C20.7012 50.8001 9.70117 46.6001 1.30117 39.0001C0.601168 38.4001 1.20117 37.6001 2.00117 38.2001C11.3012 43.4001 21.8012 46.2001 32.6012 46.2001C40.6012 46.2001 48.5012 44.5001 55.9012 41.4001C57.1012 40.9001 58.1012 42.1001 57.0012 43.0001ZM59.8012 39.8001C59.0012 38.7001 54.0012 39.4001 51.9012 39.5001C51.2012 39.6001 51.1012 39.1001 51.8012 38.7001C55.7012 36.0001 62.1012 36.7001 62.8012 37.6001C63.6012 38.4001 62.7012 44.9001 58.9012 48.0001C58.3012 48.4001 57.8012 48.1001 58.1012 47.6001C58.8012 45.4001 60.6012 40.9001 59.8012 39.8001Z"/></svg>
      ),
      title: "Maintain Cloud Infrastructure",
      paragraph:
        " I provides expertise in leveraging cloud computing services from major providers by carrying out Cloud architecture design and setup for optimal performance and cost efficiency while also offering migration services to move existing applications to the cloud.",
    },
    {
      id:5 ,
      icon: (
  <svg className="fill-current" width="52" height="52" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_412_9)"><path d="M31.9742 64C31.1484 64 30.2194 63.8968 29.4968 63.2774L21.6516 58.6323C20.5162 57.9097 21.0323 57.8064 21.5484 57.6C23.0968 57.1871 23.4065 56.8774 25.0581 56.0516C25.1613 55.9484 25.471 55.9484 25.6774 56.1548L31.6645 59.7677C31.7678 59.871 32.0774 59.871 32.3871 59.7677L55.8194 46.2452C55.9226 46.1419 56.2323 45.8323 56.2323 45.6258V18.4774C56.2323 18.1677 56.1291 18.0645 55.8194 17.8581L32.2839 4.54194C32.1807 4.43871 31.871 4.43871 31.5613 4.54194L8.23226 18.0645C8.12903 18.1677 7.81936 18.4774 7.81936 18.6839V45.6258C7.81936 45.9355 7.92258 46.0387 8.23226 46.2452L14.6323 49.8581C18.142 51.6129 20.3097 49.5484 20.3097 47.3806V20.9548C20.3097 20.5419 20.6194 20.2323 21.0323 20.2323H24.0258C24.4387 20.2323 24.7484 20.5419 24.7484 20.9548V47.5871C24.7484 52.2323 22.271 54.8129 17.9355 54.8129C16.4903 54.8129 15.6645 54.8129 12.5678 53.3677L6.47742 49.9613C5.03226 49.1355 4 47.4839 4 45.6258V18.4774C4 16.7226 4.82581 15.1742 6.47742 14.1419L29.7032 0.619355C31.1484 -0.206452 33.2129 -0.206452 34.6581 0.619355L58.0903 14.2452C59.5355 15.071 60.5678 16.7226 60.5678 18.5806V45.5226C60.5678 47.2774 59.742 48.8258 58.0903 49.8581L34.7613 63.2774C33.7291 63.8968 32.9033 64 31.9742 64ZM50.8645 37.3677C50.8645 32.3097 47.5613 30.9677 40.2323 29.9355C32.9033 28.9032 32.2839 28.4903 32.2839 26.7355C32.2839 25.2903 32.9032 23.4323 38.271 23.4323C43.0194 23.4323 44.7742 24.4645 45.4968 27.7677C45.6 28.0774 45.8065 28.1806 46.2194 28.1806H49.2129C49.3162 28.1806 49.6258 28.0774 49.6258 28.0774C49.6258 28.0774 49.7291 27.7677 49.7291 27.6645C49.3162 21.9871 45.4968 19.5097 38.1678 19.5097C31.4581 19.5097 27.4323 22.2968 27.4323 27.0452C27.4323 32.1032 31.4581 33.5484 37.7549 34.1677C45.3936 34.8903 46.0129 36.0258 46.0129 37.471C46.0129 40.0516 43.9484 41.0839 39.0968 41.0839C32.9032 41.0839 31.5613 39.5355 31.1484 36.4387C31.0452 36.129 30.8387 35.8194 30.4258 35.8194H27.6387C27.2258 35.8194 26.9162 36.129 26.9162 36.5419C26.9162 40.4645 28.9807 45.2129 39.2 45.2129C46.6323 45.4194 50.8645 42.529 50.8645 37.3677Z"/></g><defs><clipPath id="clip0_412_9"><rect width="64" height="64" fill="white"/></clipPath></defs></svg>
      ),
      title: "Node.JS Development",
      paragraph:
        "Offer end-to-end application development using Node.js, encompassing both server-side and client-side development while building robust and secure RESTful API's."
    },
  ];
  export default ServicesData;
   
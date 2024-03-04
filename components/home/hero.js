import Link from 'next/link';
import Animation from './animation'
 export default function Hero(){
     return(
         <>
             <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요. 먕입니다.</h1>
              <p className="mb-8 leading-relaxed">
                  중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다.
                    대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 
                    이 경우 그 명령에 의하여 개정 또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을 회복한다.</p>
              <div className="flex justify-center">
              <Link legacyBehavior href="/projects">
                <a className="btn-project">프로젝트 보러가기</a>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
         </>
     )
 }
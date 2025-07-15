"use client"

import { useState } from "react"
import { ChevronRight, Hand } from "lucide-react"

export default function JobRecruitmentPage() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const handleJobSearchClick = () => {
    console.log("近いうちに転職したい clicked")
  }

  const handleInfoGatheringClick = () => {
    console.log("今は情報収集したい clicked")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Custom Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/20 to-gray-700/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-1 bg-yellow-400/30 transform -skew-y-1"></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-400/30 transform skew-y-1"></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-green-400/30 transform -skew-y-1"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700/20 transform rotate-45 rounded-lg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-600/20 transform -rotate-12 rounded"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 hidden lg:block">
          <div className="relative">
            <div className="w-16 h-12 bg-gray-700/40 rounded-l-lg"></div>
            <div className="w-32 h-16 bg-gray-600/40 rounded-r-lg -mt-2 ml-14"></div>
            <div className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800/50 rounded-full"></div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gray-800/50 rounded-full"></div>
            <div className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800/50 rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <header className="relative z-10 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-1 sm:space-y-0">
            <div className="text-sm">
              <span className="font-medium">ドライバーズラボ</span>
            </div>
            <div className="text-xs sm:text-sm text-teal-300">
              ハローワーク非公開も多数！新着・レア求人を会員限定でご紹介！
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
            採用ご担当者様はこちら
          </button>
        </div>
      </header>

      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-auto backdrop-blur-sm">
          <div className="text-center mb-6">
            <h1 className="text-orange-500 font-bold text-lg sm:text-xl mb-4 leading-tight">
              お近くの好条件求人をご紹介！
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-teal-400 rounded-sm mr-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">お気持ちはどちらに近いですか？</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <button
                onClick={handleJobSearchClick}
                onMouseEnter={() => setHoveredButton("job-search")}
                onMouseLeave={() => setHoveredButton(null)}
                className={\`w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-4 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base \${hoveredButton === "job-search" ? "transform scale-105" : ""}\`}
              >
                <span>近いうちに転職したい</span>
                <ChevronRight className="w-5 h-5 flex-shrink-0" />
              </button>
              <div className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 hidden sm:block">
                <Hand className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 rotate-12" />
              </div>
            </div>

            <button
              onClick={handleInfoGatheringClick}
              onMouseEnter={() => setHoveredButton("info-gathering")}
              onMouseLeave={() => setHoveredButton(null)}
              className={\`w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-4 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base \${hoveredButton === "info-gathering" ? "transform scale-105" : ""}\`}
            >
              <span>今は情報収集したい</span>
              <ChevronRight className="w-5 h-5 flex-shrink-0" />
            </button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 text-center text-white/90 pb-4 px-4">
        <p className="text-sm mb-2">※ ハローワーク非公開求人も多数 ※</p>
        <p className="text-xs text-white/70">07月15日 08:30 最新求人更新</p>
      </footer>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const categoryData = {
  1: `기초 개념:
해외 투자의 기초 개념을 이해하는 것은 투자 결정을 내리는 데 중요합니다.\n
- 주식: 기업의 소유권을 나타내며, 주식 매수자는 기업의 일부분을 소유하게 됩니다. 주가는 시장의 수요와 공급에 따라 변동합니다.\n
- 채권: 정부나 기업이 자금을 조달하기 위해 발행하는 증서로, 일정 기간 동안 이자를 지급하며 만기 시 원금을 상환합니다.\n
- 펀드: 여러 투자자들의 자금을 모아 다양한 자산에 투자하는 금융 상품으로, 전문 관리자가 운용합니다.\n
- ETF: 주식처럼 거래되는 펀드로, 특정 지수나 자산을 추종하는 상품입니다.\n`,

  2: `시장 분석:
투자할 시장을 분석하는 방법을 배우는 것은 성공적인 투자에 필수적입니다.\n
- 경제 지표: GDP, 실업률, 인플레이션 등 경제 전반을 나타내는 지표를 통해 시장의 건강 상태를 평가할 수 있습니다.\n
- 산업 동향: 특정 산업의 성장 가능성과 현재 트렌드를 분석하여 유망한 투자 기회를 찾을 수 있습니다.\n
- 기업 실적: 기업의 재무제표, 수익 보고서 등을 분석하여 기업의 안정성과 성장 가능성을 평가합니다.\n
- 글로벌 이벤트: 국제 무역, 정치적 사건, 자연재해 등이 시장에 미치는 영향을 분석해야 합니다.\n`,

  3: `투자 전략:
해외 투자 전략을 세우는 것은 리스크를 관리하고 수익을 극대화하는 데 중요합니다.\n
- 분산 투자: 다양한 자산에 투자하여 리스크를 분산시킵니다. 예를 들어, 주식, 채권, 부동산 등에 분산 투자할 수 있습니다.\n
- 장기 투자: 장기적인 관점에서 자산을 보유함으로써 시장 변동성을 최소화하고 안정적인 수익을 추구합니다.\n
- 단기 투자: 단기적인 가격 변동을 이용하여 수익을 추구하는 전략으로, 기술적 분석과 시장 트렌드 파악이 중요합니다.\n
- 위험 관리: 투자 포트폴리오의 리스크를 지속적으로 모니터링하고 조정하여 예상치 못한 손실을 최소화합니다.\n`
}

const fetchCategoryData = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: categoryData[id] })
    }, 1000)
  })
}

function Category() {
  const { id } = useParams()
  const { data, error, isLoading } = useQuery(['category', id], () => fetchCategoryData(id))

  if (isLoading) return <p>로딩 중...</p>
  if (error) return <p>에러 발생: {error.message}</p>

  return (
    <div>
      <p style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
    </div>
  )
}

export default Category

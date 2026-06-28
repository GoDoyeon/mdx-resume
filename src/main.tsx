import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import './css/custom_2.css'
import OriginalResume from './resume.mdx'
import MyResume3 from './dy/resume_3.mdx'
import MyResume4 from './dy/resume_4.mdx'
import MyResume2 from './dy/resume_2.mdx'
import MyWorkExperience2 from './dy/workExperience_2_성과중심.mdx'
// import MyWorkExperience2 from './dy/workExperience_2.mdx'
import Newbie from './newbie.mdx'
import Superrookie from './superrookie.mdx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// [PDF 추출 방법]
// Chrome에서 http://localhost:5173/workExperience 열고
// → ⌘P → 대상: PDF로 저장 → 여백: 없음, 배경 그래픽 체크 → 저장.
// CSS의 @page { margin: 0 }이 적용되려면 인쇄 다이얼로그에서 여백을 "없음"으로 두는 게 중요합니다.

const router = createBrowserRouter([
	// 내 이력서
	{
		path: '/',
		element: <MyResume2 />,
	},
	{
		path: '/resume3',
		element: <MyResume3 />,
	},
	{
		path: '/resume4',
		element: <MyResume4 />,
	},
	// 내 경력기술서
	{
		path: '/workExperience',
		element: <MyWorkExperience2 />,
	},
	// 원본 이력서
	{
		path: '/resume',
		element: <OriginalResume />,
	},
	{
		path: '/newbie',
		element: <Newbie />,
	},
	{
		path: '/superrookie',
		element: <Superrookie />,
	},
	{
		path: '/superrookie',
		element: <Superrookie />,
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)

import { supabase } from 'index'
import { nameList } from 'nameList'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const App = () => {
	const [commentList, setCommentList] = useState([])
	const [comment, setComment] = useState('')

	useEffect(() => {
		const A = async () => {
			const { data } = await supabase.from('lheesung').select()
			setCommentList(data as any)
		}
		A()
	}, [])

	const handleClick = () => {
		if(!comment.trim()) return alert("커멘트를 입력해라 ㅋㅋ ");
		Swal.fire({
			title: '이희성에게 생일축하메세지를 보내시겠습니까?',
			showDenyButton: true,
			confirmButtonText: '보낸다',
			denyButtonText: `보낸다`,
		}).then(() => {
			Swal.fire({
				title: '진짜보낸다고?',
				showDenyButton: true,
				confirmButtonText: '보낸다',
				denyButtonText: `보낸다`,
			}).then(() => {
				Swal.fire({
					title: '진짜??',
					showDenyButton: true,
					confirmButtonText: '보낸다',
					denyButtonText: `보낸다`,
				}).then(() => {
					Swal.fire({
						title: '진짜보낸다고??????',
						showDenyButton: true,
						confirmButtonText: '보낸다',
						denyButtonText: `보낸다`,
					}).then(() => {
						Swal.fire({
							title: '고밈ㄴ을 좀 해봐봐 진짜보낸다고?',
							showDenyButton: true,
							confirmButtonText: '보낸다',
							denyButtonText: `보낸다`,
						}).then(() => {
							Swal.fire({
								title: '자 이희성의 생일을 맞추봐라 그럼보내주지',
								showDenyButton: true,
								confirmButtonText: '11월17일',
								denyButtonText: `13월 -5일`,
							}).then(() => {
								Swal.fire({
									title: '정답이다 정답은 그거다 아무튼그렇다 하하하하',
									showDenyButton: true,
									confirmButtonText: '어쩌라고',
									denyButtonText: `어쩌라고`,
								}).then(() => {
									Swal.fire({
										title: '이제 메세지를 보내주도록 하지',
										showDenyButton: true,
										confirmButtonText: '보낸다',
										denyButtonText: `보낸다`,
									}).then(() => {
										Swal.fire({
											title: '고마워해라알겠지?',
											showDenyButton: true,
											confirmButtonText: '고마워한다',
											denyButtonText: `고마워한다`,
										}).then(() => {
											Swal.fire({
												title: '그래그래 밥잘챙겨먹고',
												showDenyButton: true,
												confirmButtonText: '보낸다',
												denyButtonText: `보낸다`,
											}).then(() => {
												Swal.fire({
													title: '그래 이버튼누르면 진짜보내ㅜ줄게?',
													showDenyButton: true,
													confirmButtonText: '진짜 보낸다',
													denyButtonText: `진짜 보낸다`,
												}).then(async () => {
													const { error } = await supabase
														.from('lheesung')
														.upsert({ id: commentList.length + 1, name: nameList[(commentList.length + 1) % 40], content: comment })
													if (!error) {
														Swal.fire('보냈다!')
														window.location.reload()
													} else {
														Swal.fire('에러났다!')
													}
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}
	return (
		<div className="background w-full mt-32 flex flex-col items-center justify-center gap-20">
			<span className="text-white text-3xl font-bold title">이희성 생일축하한다</span>
			<div className="flex flex-wrap">
				{Array.from({ length: 50 }).map((_, i) => (
					<img key={i} className="img w-20" src="https://velog.velcdn.com/images/ubin_ing/post/265df123-5ced-4596-b761-5d67d65d6ad8/image.jpeg" />
				))}
			</div>
			<span className=" text-6xl text-white">이희성한테 생일축하 메세지 보내기 ~~~</span>
			<div className="flex flex-col gap-2">
				<textarea
					onChange={(e) => setComment(e.target.value)}
					value={comment}
					className=" p-4 border-blue-700 border-4 border-solid w-[600px] h-[200px] resize-none text-xl"
					placeholder="축하할 말을 입력해라"
				/>
				<button onClick={handleClick} className=" bg-blue-500 border-red-500 border-4 border-solid rounded-md px-5 py-3 text-white">
					축하메세지 보내기
				</button>
			</div>
			<span className=" text-6xl text-white">이희성을 축하한 사람들의 ㅁㅔ세지 몱록</span>
			<div className="flex flex-col gap-4 pb-20">
				{commentList.map((commentItem: any) => (
					<div key={commentItem.id} className="flex w-[68vw] px-4 py-2 bg-white flex-col">
						<div className="flex items-center gap-4">
							<img
								className="w-12 h-12 rounded-full"
								src="https://velog.velcdn.com/images/ubin_ing/post/2185340c-088c-4287-b211-b7f1443f4cd9/image.jpeg"
							/>
							<span className="text-lg text-gray-500">{commentItem.name}</span>
						</div>
						<span className="text-3xl text-black">{commentItem.content}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default App

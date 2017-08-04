window.onload=function(){
	new Vue({
		el: '#app01',
		data: {
			msg: 'Hello First #App01' ,
			ok: false,
			items: [
				{ message: 'Food' },
				{ message: 'Bar' },
				{ message: 'Noodle' },
				{ message: 'Rice' },
				{ message: 'Curry' }
			]
		},
		methods: {
			showAlert() {
				alert('Alert Message');
			}
		},
		created() {
			this.message = 'byebye!'
		}
	}),
		
	new Vue({
		el: '#app02',
		data: {
			msg: 'Hello Second #App02' ,
			counter: 0 ,
			app02html: '<span style="background:#ff0000">1번</span><span style="background:#00ff00">1번</span><span style="background:#0000ff">1번</span>',
			app02span: 'dicafrio'
		},
		
	}),
		
	new Vue({
		el: '#app03',
		data: {
			msg: 'Hello Second #App03' ,
			message: '한글 텍스트 바로적용!' ,
			checkedNames: [] ,
			radioName: [] ,
			selectName: []
		},
		methods: {
			typing(e){
				this.message = e.target.value
			}
		}
		
	});

	/*// 등록
	Vue.component('my-component', {
		template: '<div>사용자 정의 컴포넌트 입니다!</div>'
	})
	// 루트 인스턴스 생성
	new Vue({
		el: '#example'
	})*/

	var Child = {
		template: '<div>사용자 정의 컴포넌트 입니다!</div>'
	}
	new Vue({
		el: '#example',
		components: {
		// <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
		'my-component': Child
		}
	})

	Vue.component('child', {
		// props 정의
		props: ['message'],
		// 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
		// vm의 this.message로 사용할 수 있습니다.
		template: '<span>{{ message }}</span>'
	})
}
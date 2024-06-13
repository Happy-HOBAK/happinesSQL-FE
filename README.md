# HappinesSQL 🍀
<br>
<br>
<p align="center"><img src="https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/39098131-3950-4cda-8a8c-b3abc95a8efe"></p>


## 📚 프로젝트 소개
HappinesSQL은 사용자가 일상 속에서 어떤 활동이 행복을 가져다주는지 분석하고, 이를 통해 더 행복한 삶을 살 수 있도록 도와주는 맞춤형 행복 데이터 분석 서비스이다.

![Slide 16_9 - 17](https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/3198e574-29da-497a-a105-202c304f4f1e)

## 🌄 프로젝트 배경
User Research 결과 많은 사람들이 자신의 행복 요인을 잘 모르고 있다는 것을 알게 되었고, 이를 개선하기 위해 프로젝트를 시작하게 되었다.

![Slide 16_9 - 18](https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/43eedd48-0c30-4c9c-91ff-94f2eda0878c)

## ⚙️ 기술 스택 소개 및 아키텍쳐


![Slide 16_9 - 20](https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/56b2f038-f4ae-44f0-be06-780e35c3cd97)

### 프론트엔드 기술 스택 및 컨벤션

<table>
  <thead>
    <tr>
      <th>분류</th>
      <th>내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>프레임워크</strong></td>
      <td>React-native</td>
    </tr>
    <tr>
    <tr>
      <td><strong>패키지 매니저</strong></td>
      <td>yarn</td>
    </tr>
    <tr>
      <td><strong>App 생성</strong></td>
      <td>create-expo-app</td>
    </tr>
    <tr>
      <td><strong>Script 언어</strong></td>
      <td>javascript</td>
    </tr>
    <tr>
      <td><strong>상태 관리</strong></td>
      <td>useState, context API, recoil</td>
    </tr>
    <tr>
      <td><strong>기타 Hooks 사용</strong></td>
      <td>useEffect(), useIsFocused(), useNavigation(), useRef() 등 </td>
    </tr>
    <tr>
      <td><strong>API 및 라이브러리</strong></td>
      <td><a href="https://hello-happy-world.notion.site/4-api-d0bc52aa6ca04063bd063bd12e779295?pvs=4">API 및 라이브러리 정리</a></td>
    </tr>
    <tr>
      <td><strong>API 호출</strong></td>
      <td>axios</td>
    </tr>
    <tr>
      <td><strong>CSS</strong></td>
      <td>Styled Components</td>
    </tr>
    <tr>
      <td><strong>빌드 프레임워크</strong></td>
      <td>Expo-CLI (eas)</td>
    </tr>
  </tbody>
</table>

### 폴더 구조
```

├── .expo 📦 expo 관련 설치 도구
├── assets 🗂 썸네일 이미지, 로고 이미지 저장
├── node_modules 🗂 노드 모듈 저장
├── package.json 📦 설치된 패키지를 관리하는 파일
├── App.js ✡️ 앱의 라우팅과 글로벌 스타일 지정
└── src
    ├── common 🗂 공통으로 사용되는 파일들 저장
         ├── context 📂 비교적 단순한 상태 관리 도구
         ├── data 📂 공통 mock 관련 데이터 파일들 저장
         ├── icon 📂 공통 이모티콘 파일들 저장
         ├── navigation 📂 하단 네비게이션 및 페이지 네비게이션 관리
         ├── notification 📂 전체 푸시 알림 설정
         ├── recoil 📂 전역 상태 관리 도구
    │
    ├── screens 페이지 별 폴더 관리
         ├── home 메인 화면 페이지
             ├── assets api, components, utils 등 각 페이지에서만 쓰는 컴포넌트들
                 ├── apis 공통 api 관련 파일들 저장
                 ├── components 공통 컴포넌트 관련 파일들 저장
         ├── Landing 앱 진입시 랜딩 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── Login 로그인 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── SignUp 회원가입 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── records 행복 톺아보기 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── report 📂 행복 리포트 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── calender 📂 행복 달력 페이지
         │   └── //세부 폴더구조 Home과 동일
         ├── trends 📂 행복 트렌드 페이지
         │   └── //세부 폴더구조 Home과 동일
    ├── styles 공통 style 관련 파일들 저장
        └── globalStyles.js

```

## 프론트엔드 화면 구성 및 주요 기능
<img width="672" alt="스크린샷 2024-06-13 오전 10 43 30" src="https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/315fe777-f4cb-4481-af9c-4e7d4405e677">

- 랜딩, 회원가입, 로그인, 유저 프로필

<img width="573" alt="스크린샷 2024-06-13 오전 10 51 18" src="https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/25315148-3718-4e35-b51d-c5312a2ee149">

- 메인 대시보드 (홈, 하단 네비게이션 바로 이동 가능)
<img width="562" alt="스크린샷 2024-06-13 오전 10 49 42" src="https://github.com/Happy-HOBAK/happinesSQL-FE/assets/87332713/1a6c01ee-4efe-4428-8997-948ce8b194a3">

- 행복 리포트 탭 / 행복 트렌드 탭 / 행복 달력 탭 / 행복 톺아보기 탭

## 🎞️ Demo
[안드로이드에 설치 가능한 apk 파일](https://drive.google.com/drive/my-drive?hl=ko)

## 프로젝트에서 중요하게 생각한 점
[RN에서 조건부 렌더링](https://5ffthewall.tistory.com/88)
<br>
추후 추가

## 👩🏻‍💻 Developer

<table>
  <thead>
    <tr>
      <th>Backend</th>
      <th>Backend</th>
      <th>Frontend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/KkomSang">이상은</a></td>
      <td><a href="https://github.com/yel-m">정예림</a></td>
      <td><a href="https://github.com/ssolfa">김솔미</a></td>
    </tr>
  </tbody>
</table>

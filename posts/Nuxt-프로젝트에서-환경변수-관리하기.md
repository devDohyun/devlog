---
title: 'Nuxt 프로젝트에서 환경변수 관리하기 (feat. dotenv)'
date: '2021. 4. 7.'
excerpt: '서비스를 배포하실 때 환경별로 포트번호 등이 달라서 소스코드를 직접 수정하셨던 경험이 있으신가요 ?
포트번호와 같이 환경별로 다른 값이나 DB 접속 정보 등 소스코드에 포함되면 안될 중요한 값을
dotenv 패키지를 통해서 환경변수로 관리한다면, 별도의 추가 작업을 할 일이 없으실 겁니다.'
tag: nuxt
---

안녕하세요.

오늘은 dotenv를 활용하여 Nuxt 프로젝트에서 환경변수를 관리하는 법을 소개해드리고자 합니다.

### **들어가며**

서비스를 배포하실 때 환경별로 포트번호 등이 달라서 소스코드를 직접 수정하셨던 경험이 있으신가요 ?

포트번호와 같이 환경별로 다른 값이나 DB 접속 정보 등 소스코드에 포함되면 안될 중요한 값을  
dotenv 패키지를 통해서 환경변수로 관리한다면, 별도의 추가 작업을 할 일이 없으실 겁니다.

### **설치하기**

```
npm i dotenv
```

terminal에서 프로젝트 root디렉토리로 이동한 후 위 명령어를 실행합니다.

### **설정하기**

설치가 완료되었다면, nuxt config 파일(nuxt.config.js)에서 작업이 필요합니다.

**1\. dotenv 패키지와 환경변수 파일 불러오기**

```
const dotenv = require('dotenv')
const envPath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'


dotenv.config({ path: envPath })
```

라인 2와 같이 NODE_ENV에 따라 env파일 path를 다르게 설정해주면,  
production과 development 환경에서 자연스레 알맞는 환경변수가 적용됩니다.

**2\. env파일을 생성하고 값 지정하기**

```
NAME=안도현의 개발 블로그

SERVER_HOST=localhost
SERVER_PORT=9001

HEADER_TITLE=안도현의 개발 블로그
HEADER_DESCRIPTION=안도현의 개발 블로그입니다.

API_URL=http://localhost:9002

KAKAO_SDK_KEY=AAAA123456789
```

설정하신 경로상에 위 예시와 같이 env파일을 만들고 저장합니다.

SDK API키와 같이 소스코드에 포함되면 안될 값이 있다면 적극적으로 세팅해주세요.

**3\. Nuxt Config에서 env 매핑하기**

어느 변수를 만들지 정하셨다면, 다시 nuxt config 파일로 돌아와서,  
export object 내에 아래와 같이 용도에 따라 활용하고,

프로젝트 서비스 내에서도 필요할 경우 env property에 추가해주세요.

```
export default {
  server: {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 80
  },
  env: {
    NAME: process.env.NAME,

    HEADER_TITLE: process.env.HEADER_TITLE,
    HEADER_DESCRIPTION: process.env.HEADER_DESCRIPTION,

    API_URL: process.env.API_URL,

    KAKAO_SDK_KEY: process.env.KAKAO_SDK_KEY
  },
  head: {
    titleTemplate: '%s - ' + process.env.HEADER_TITLE,
    title: process.env.HEADER_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.HEADER_DESCRIPTION || '' },

      { hid: 'og-title', property: 'og:title', content: process.env.HEADER_TITLE },
      { hid: 'og-description', property: 'og:description', content: process.env.HEADER_DESCRIPTION || '' },
    ]
  }
}
```

**4\. 서비스에서 env 활용하기**

성공적으로 설정을 완료하셨다면, store나 page component 등 서비스 전역에서 환경변수를 활용하실 수 있습니다.

```
// Store에서 API 함수 관리 시 활용 예
export const actions = {
  getPress(context, payload = {}) {
    const url = `${process.env.API_URL}/press`

    return this.$axios.$get(url, { params: payload.query })
  }
}
```

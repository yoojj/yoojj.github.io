# hexo

```bash
# hexo 설치 및 확인
$ npm install hexo-cli -g
$ hexo -v

# 프로젝트 생성
$ hexo init 프로젝트
$ cd 프로젝트

# 실행
## http://localhost:4000/
$ hexo server
$ hexo s


# md 파일 생성
$ hexo new 제목

# 정적 페이지로 변환
$ hexo generate
$ hexo g
```



## 구조

```bash
프로젝트/
├── scaffolds/
├── source/
├── themes/
├── _config.yml
└── package.json
```



## 배포

```bash
# 패키지 설치
$ npm install hexo-deployer-git

# _config.yml 추가
deploy:
  type: git
  repo: https://github.com/사용자/사용자.github.io
  branch: master
  token: 토큰

# 배포
$ hexo deploy
$ hexo d

# 정적 문서로 변환 및 배포
$ hexo d -g
```


**토큰 생성**   
https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line

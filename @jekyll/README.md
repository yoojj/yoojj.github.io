# Jekyll
: 텍스트 변환 엔진  
: 마크업 언어나 마크다운으로 작성한 문서를 설정한 규칙에 맞춰 정적 사이트를 생성   


```bash
$ yum install ruby
$ gem install jekyll bundler

$ bundle init
$ bundle add jekyll
$ bundle install


# 정적 사이트 생성
$ jekyll build

# 변화를 감지해 재생성
$ jekyll build --watch

# 실행
$ jekyll serve


## incremental build 오류
$ jekyll serve --incremental
$ bundle exec jekyll serve

## mkmf.rb can't find header files for ruby 오류
$ yum install ruby-devel
```


**구조**
```bash
example/
├─ data/       # yml, json, cvs 데이터 저장
├─ includes/   
├─ layouts/
├─ posts/
├─ assets/
├─ config.yml
├─ Gemfile
├─ Gemfile.lock
└─ index.html
```

**Gemfile**   
: gem 정의 문서    
: bundle을 통해 gem을 설치하고 설치된 gem 정보를 Gemfile.lock에 기록  

ex.
```yml
gems:
  - jekyll-paginate
  - jekyll-sitemap

gem 'jekyll-paginate'
```


[top](#)

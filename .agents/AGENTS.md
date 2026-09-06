# Better Future Policy Institute
# Git & Deployment Safety Rules

## 1. Main 브랜치 보호 원칙

이 프로젝트의 `main` 브랜치는 실제 테스트 서버 자동배포와 연결되어 있습니다.

### 절대 금지:
- `git push --force`
- `git push -f`
- `git push --force-with-lease`
- main 브랜치 history rewrite
- main 브랜치 reset 후 강제 push
- 기존 main 커밋 삭제
- rebase 결과를 main에 force push

### 반드시 준수:
1. 작업 시작 전 최신 main을 가져온다 (`git fetch origin`, `git pull --rebase origin main`).
2. 기존 main history를 보존한다.
3. 변경사항은 새로운 commit으로 추가한다.
4. push는 항상 fast-forward 가능한 정상 push (`git push origin main`)만 사용한다.

### 권장 개발 및 커밋 흐름:
```bash
git fetch origin
git checkout main
git pull --rebase origin main

# 작업 수행 후
git add <변경파일>
git commit -m "..."
git pull --rebase origin main
git push origin main
```
충돌 발생 시 임의로 force push하지 않고 작업을 중단한 후 충돌을 해결합니다.

---

## 2. 서버 배포 필수 파일

### `next.config.mjs`
반드시 다음 설정을 유지하며 절대 삭제하지 않습니다:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```

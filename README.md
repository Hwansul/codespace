# Project Structure

```shell
├── documents # TODO: Document project will be there. DocumentCSS, jsdoc, pydoc, and so on...
├── index.html # FIN: simple intro page with nes.css
├── package.json
├── README.md
├── snippets # TODO: algorithms and data structure codes written in python and javascript will be there.
│  ├── navi
│  │  ├── frequently-used
│  │  │  ├── built-in
│  │  │  │  ├── install-to-macOS.cheat
│  │  │  │  ├── install-to-ubuntu.cheat
│  │  │  │  ├── install-to-wsl.bat
│  │  │  │  └── install-to-wsl.sh
│  │  │  └── from-community
│  │  │     ├── bat.cheat
│  │  │     ├── diff-so-fancy.cheat
│  │  │     └── exa.cheat
│  │  ├── network
│  │  │  └── curl.cheat
│  │  ├── pkg-mgr
│  │  │  ├── brew.cheat
│  │  │  └── yarn.cheat
│  │  └── version-controll
│  │     └── git.cheat
│  └── shell # TODO: add githook script with gum.
└── yarn.lock
```

## 주의

- :fire: 폴더 Nesting 하지 말 것
- :fire: 파일 이름에 공백 넣지 말 것
- :fire: codespace 내에서 sync 돌리지 말 것
- :fire: 스니펫 이름에 . 넣지 말기. (현재 nap에서 .에 대한 이스케이프가 안 되어 있음.)

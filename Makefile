.PHONY: build local

build:
	npm run build

local:
	cd dist && python3 -m http.server 8090

clean:
	rm -rf dist

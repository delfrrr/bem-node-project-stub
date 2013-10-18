.PHONY: all
all:: clean
all:: build

.PHONY: build
build:: rebuild

.PHONY: clean-all
clean-all::
	git clean -dfx ./

.PHONY: clean
clean::
	rm -f `find ./app/*/* ! -name '*bemdecl.js'`

.PHONY: install
install::
	npm install

.PHONY: rebuild
rebuild::
	./node_modules/enb/bin/enb make

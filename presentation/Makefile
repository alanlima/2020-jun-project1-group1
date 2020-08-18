deploy:
	@npx fusuma build
	@aws s3 cp ./dist s3://alanlima --recursive
.PHONY:deploy
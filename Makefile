deploy: 
	cd jkrclaro && npm run build && rm -rf ../static && mv build/* ../
	git add . && git commit -m 'update' && git push

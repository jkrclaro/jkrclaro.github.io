deploy: 
	cd jkrclaro && npm run build && rm -rf ../static && mv build/* ../
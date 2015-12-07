import json

user_ids = []

#Open output file and add all ids to user_ids list

f = open("output")
for line in f:
	tweet = json.loads(line)
	user_id = tweet['created_at']
	user_ids.append(user_id)
f.close()

# Print the size of the id list 

print len(user_ids)

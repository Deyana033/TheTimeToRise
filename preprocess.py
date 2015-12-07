from itertools import islice
from pprint import pprint

# Open RiseUpOctober file and grab first 50000 lines

with open('RiseUpOctober') as first:
	result = list(islice(first, 50000))

# Write the results to output
with open('output', 'wt') as out:
	for item in result:
		out.write(item)

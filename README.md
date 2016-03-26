# webTree
A general website parser - creates a tree visualisation

# Conception
I originally came up with this concept to create a program that can create a tree of Wikipedia based on connected pages. Here is a quote from the article I was reading 
which gave me the inspiration for this project:
> Because the data is completely free, Angolans are hiding large files in Wikipedia articles on the Portuguese Wikipedia site (Angola is a former Portuguese colony)
—sometimes concealing movies in JPEG or PDF files. They’re then using a Facebook group to direct people to those files, creating a robust, completely free file 
sharing network. 

on [Motherboard Vice](http://motherboard.vice.com/read/wikipedia-zero-facebook-free-basics-angola-pirates-zero-rating) link post on Reddit. 

I was thinking of different ways of stop this exploit since the article talked about the difficulties behind this. Originally an idea to track Wikipedia pages 
and to see all the connected pages from each page. I realise that program would also be able to parse all websites and display the nodes.
JavaFX library powers this parser.

Visual Aspect
Current plan is to implement the visual aspect of th program similar to the version control visualisation.
# Documentation 
Planning to use https://github.com/skywinder/github-changelog-generator for change log purposes.
# Check List
- [ ] Take in a html input
- [ ] Connect to local host website
- [ ] Take in the HTML input from local host
- [ ] Take in local host from a link and taking a empty HTML input
- [ ] Stop parsing if no website found 
- [ ] Take in local host from a link and taking a HTML input
- [ ] Parse any link found.
- [ ] Connect to link
- [ ] Create a connection between the links
- [ ] Rinse and repeat.



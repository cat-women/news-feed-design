

/*


1. userA, userB, userC are 3 users 

*********************** SENDING CONNECTION REQUEST ************************
2. userA sends a friend request to userB

    i.
        {
            requestorId: A,
            receiverId: B,
            status: 'pending'
        }

    ii. After a while userB accepts the request

        now the document above in 2.i. changes from 'pending' to 'accepted'

        {
            requestorId: A,
            receiverId: B,
            status: 'accepted'
        }

--------------------- userA and userB are friends now --------------------

3. Next day, userA makes a post

    Post Model adds following document
    {
        userId: userA,
        postText: 'Hi guys',
        upVoteCount: 0,
        postCommentsCount:0
    }

    

4. Now how can we retrive userA post on userB news feed?

As a developer how would i solve this?

When userB clicks on the newsfeed, a request to the backend is sent to get the latestFeed for userB which includes the post userA made

1. UI ---fetchNewsFeed(userB)------> Backend
                
Backend:
Backend can resolve the issue 1 of the two ways.

        Fanout on read
     i . ConnectionModel.findBy(requestorORreceiver as userB)
                .then(friendsList => {
                    PostModal.findAllPostOfUserInFriendsList
                    return all the post including userA post
                })
 
    

    ii. Fanout on write
        When a user makes a post, a service is triggered puts that post reference to all it's friends list
        getNewsFeedForUser(userB)  => {
           (newsFeedModel || redis).findPreCalculatedNewsFeed(userB)
            .then(newsFeedForUserB => return this doc which already has userA post )



As a task  to design a news feed algorithm:
To make the design more efficient and scalable. You can make necessary adjustment on schema design if neeeded.

1. How are you going to approach this task? 
2. Are you familiar with caching techniques?
    would you implement any cache that would store user already pre-calculated feed.
3. How are you going to prioritize which post to show first?
        for example, user has 500 friends and they all made a post the same day.
        How are you going to prioritize which to show first?
        you can come up with way to rank post by giving them relevancy number or some sort based on likes/comments or other engagemnts,

4. Develop newsfeed algorithm that will serve it's purpose of generating a userfeed from friends post.

It's very open ended question. You can come up with any idea on how to design such feature.

Main purpose of this task is to evaluate your knowldege on system design and coding.

*/
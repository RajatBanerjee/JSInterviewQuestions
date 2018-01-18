function LinkedList(){  
    this.head = null;
    this.length=0;
  }

  var node = function(val){
    this.value= val;
    this.next= null;
 }

 LinkedList.prototype.add = function (data) {
    var newNode = new node(data);
    this.length++;

    /**if head does not exist */
    if(! this.head){
        this.head = newNode
    }
    else{
        currentNode = this.head;
        /**iterate to end of  */
        while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
 }

 LinkedList.prototype.print  = function (params) {
     console.log(JSON.stringify(this.head))
 }

 var ll = new LinkedList()
 ll.add(1)
 ll.add(15)
 ll.add(19)
 ll.print()
 ll.add(2)
 ll.add(3)
 ll.add(5)
 ll.print()

 /**https://www.thatjsdude.com/interview/linkedList.html */
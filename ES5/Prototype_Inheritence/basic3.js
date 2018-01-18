/**https://www.youtube.com/watch?v=uIlj6_z_wL8&t=9s */

function job() {
    this.pays = true;
}

//method print is attached to prototype of base class job
job.prototype.print = function (params) {
    console.log(this.pays? 'hire me' : ' thanks')
}

function techJob(title) {
    /**STEP 1 */
    job.call(this);
    this.title = title

}

techJob.prototype = Object.create(job.prototype)
techJob.prototype.constructor = techJob
techJob.prototype.printTitle = function(){
    console.log(this.title)
}
var instance = new job(); 

instance.print() //works , since its made public

var techINstance = new techJob('tech');
console.log(techINstance)
techINstance.print()
techINstance.printTitle();
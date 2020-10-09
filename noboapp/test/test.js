var assert= require('chai').assert; 
var pr1=require('../controllers/annexe1')
var pr2=require('../controllers/annexe2')

describe('p1', function() {
    it('p1 should return ', function(){
        // testing valid cases
        assert.equal(pr1.p1('Hi','2'),'The result is :1')
        assert.equal(pr1.p1('Bonjour',2),'The result is :3.5')
        
        // testing division by 0
        assert.equal(pr1.p1('Bonjour',0),'error : cannot divide by 0')
        
        // testing wrong input 
        assert.equal(pr1.p1('Bonjour',''),'Input conditions not satisfied')
        assert.equal(pr1.p1('Hi','aaa'),'Input conditions not satisfied')
        assert.equal(pr1.p1('Hi','25'),'Input conditions not satisfied')
    });
});

describe('p2', function() {
    it('p2 should return ', function(){
        // testing valid cases with start_date and end_date
        assert.equal(pr2.p2('2020-06-10','2020-07-25'),'15 jours')
        assert.equal(pr2.p2('2018-05-16','2020-09-03'),'42 jours')
        
        //  testing valid cases with start_date only
        assert.equal(pr2.p2('2020-06-10',''),'9 jours')
        
        // testing no start_date 
        assert.equal(pr2.p2('','2018-05-16'),'Please enter a valid start date')
        
    });
});

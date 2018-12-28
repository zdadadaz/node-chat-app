var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var message= {
            from : "test",
            text : "test123"
        };
        var newmessage = generateMessage(message.from,message.text);
        expect(newmessage.from).toBe(message.from);
        expect(newmessage.text).toBe(message.text);
        expect(newmessage.createAt).toBeA('number');
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var longitude = 1;
        var latitude = 1;
        var fromtext= 'admin';
        var newmessage = generateLocationMessage(fromtext,latitude,longitude);
        var urltext= 'https://www.google.com/maps?q=1,1';

        //expect(newmessage.from).toBe(fromtext);
        expect(newmessage).toInclude({from:fromtext,url:urltext});
        //expect(newmessage.url).toBe(urltext);
        expect(newmessage.createAt).toBeA('number');

    });
});
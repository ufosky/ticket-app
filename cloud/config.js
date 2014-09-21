/**
 * Created by lzw on 14-8-19.
 */
//我申请的一个应用的appId,appKey，你可以替换成自己的，新建一条工单，便可以看到相应的表
exports.applicationId='2eof6mfirkaubigbtyl2ygmmjgjm1ek0gt27xip1kejvicwd';
exports.applicationKey='rulmpv49i24z1bedbmvn38707kjbv2xzqhwn66e309ngekft';

//express用做加密token的salt，自己申请应用搭建时，可稍微更改字符串，可以更安全
exports.cookieParserSalt="klp4e8b4sddjp2asd";

//mailGun，一个邮箱服务提供商，当有新工单创建或有回复的时候用到
exports.mailGunKey='';//please use your mailGunKey

//请设置自己的slackUrl，有工单回复的时候通知此slack聊天工具
exports.slackUrl='https://avoscloud.slack.com/services/hooks/incoming-webhook?token=rNDqBLRC8TlG4YkPKBZSe2qB';

//配置自己申请的子域名
exports.hostUrl='http://atest.avosapps.com';

//邮件的发送者，平时管理员回复了你的工单的时候，你便会收到来自这个邮箱的email
exports.emailHost='notification@avoscloud.com';

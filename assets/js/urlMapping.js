/*
 * Description = UrlMapping后台接口
 * Author = chaoge
 * Date = 2018/08/28
*/
function UrlMapping(){ }

UrlMapping.isLocalHost = true; // 是测试吗
UrlMapping.origin = UrlMapping.isLocalHost ? 'http://qa.pet.ichaoge.com' : 'http://pet.ichaoge.com';

// 用户
UrlMapping.POST_USER_LOGIN = UrlMapping.origin + '/api/user/wxLogin' ;   // 登录               
UrlMapping.POST_USER_REGISTER = UrlMapping.origin + '/api/user/register' ;   // 注册       
UrlMapping.POST_USER_LIKEUSERNAME = UrlMapping.origin + '/api/user/likeUserName' ;   // 搜索用户
UrlMapping.POST_USER_UPDATEUSER = UrlMapping.origin + '/api/user/updateUser' ;   // 修改个人信息
UrlMapping.POST_USER_QUERYBYUSERID = UrlMapping.origin + '/api/user/queryByUserId' ;   // 根据ID查询用户

module.exports = UrlMapping;

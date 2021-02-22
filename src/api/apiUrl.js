const apiurl = process.env.NODE_ENV === 'development' ? '/api' : process.env.BASE_API
// console.log(process.env.NODE_ENV)
// console.log(apiurl, 'apiurl')
export default apiurl

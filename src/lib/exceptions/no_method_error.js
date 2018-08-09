export default function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}
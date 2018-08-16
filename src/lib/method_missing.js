class MethodMissingClass {
  constructor() {
    Proxy.create({
      get: (target, name) {
        if (!target[name]) throw new Exception.NoMethodError(`Method Missing ${name}`)
          if (Object.prototype.toString.call(target[name]) === '[object Function]') return target[name].apply(this, args);
        return target[name]
      }
    });
  }
}
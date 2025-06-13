export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        private _isSuperAdmin: boolean = false
      ) {}

      get isSuperAdmin(): boolean {
        return this._isSuperAdmin
      }

      promoteToSuperAdmin(): void {
        this._isSuperAdmin = true
      }

      revokeSuperAdmin(): void {
        this._isSuperAdmin = false
      }
    }
  }
}

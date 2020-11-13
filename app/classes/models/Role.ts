class Role {
    // private role_id: number; // primary key
    private role: string; // not null, unique

    constructor(roleId, role) {
        // this.role_id = roleId,
        this.role = role
    }
    
}

export default Role;
import { StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { UserRole } from '../consts/userConsts'

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.ADMIN)),
)

export const isManager = createSelector(getUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.MANAGER)),
)

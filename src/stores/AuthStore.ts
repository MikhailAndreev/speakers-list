import { observable, action, makeAutoObservable, runInAction } from "mobx";

// import { SignInData, ISignUpAgencyValues } from '../types/AuthTypes';
// import { api } from '../api';
// import { showNotification } from '../utils/showNotification';
// import { cleanupMask } from '../components/UI/Form';
import { stores } from "../contexts/stores";

export const _tokenStorageKey = "_cdsPartnerAccessToken";

export class AuthStore {
  @observable loading = false;

  @observable errorMessages: any = {};
  @observable confirmEmailMessage = false;

  @observable token = null;
  @observable isAuth = true; // mock data

  @observable completeCheckAuth = false;
  @observable codeFetched = false; // for check if code from sms is returned

  constructor() {
    makeAutoObservable(this);
  }

  @action
  registerRequest = (values: any, history: any) => {
    this.loading = true;

    const phones = [values.agencyPhones1, values.agencyPhones2].filter(
      (item) => item.length !== 0
    );
    const data: any = {
      ...values,
      agencyPhones: {
        phones,
      },
    };

    delete data.agencyPhones1;
    delete data.agencyPhones2;

    // api.post('/agency/register', data)
    //     .then(response => {
    //         if (response.data.success) {
    //             services.VerifyCodeService.confirmPhone(
    //                 '/agency/confirm-by-sms',
    //                 'Заявка на регистрацию отправлена успешно. Ожидайте подтверждения регистрации',
    //             );
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response.data?.errors) {
    //             runInAction(() => {
    //                 this.errorMessages = error.response.data.errors;
    //             });
    //         }
    //     })
    //     .finally(() => {
    //         runInAction(() => {
    //             this.loading = false;
    //         });
    //     });
  };

  @action
  login = (values: any, history: any) => {
    this.loading = true;

    // const data = {
    //     ...values,
    //     login: values.login.includes('@') ? values.login : cleanupMask(values.login),
    // };

    // api.post('/auth/login', data)
    //     .then(response => {
    //         if (response.data.success) {
    //             const token = response.data.data.accessToken;

    //             // Set token
    //             api.setToken(token);
    //             localStorage.setItem(_tokenStorageKey, JSON.stringify(token));

    //             runInAction(() => {
    //                 this.isAuth = true;
    //             });

    //             // Redirect
    //             history.push('/');
    //         }
    //     })
    //     .catch(error => {
    //         if (error.response?.data?.errors) {
    //             runInAction(() => {
    //                 this.errorMessages = error.response.data.errors;
    //             });
    //         }
    //     })
    //     .finally(() => {
    //         runInAction(() => {
    //             this.loading = false;
    //         });
    //     });
  };

  @action
  logout = (history: any) => {
    this.loading = true;

    // api.post('/auth/logout', {})
    //     .then(response => {
    //         if (response.data.success) {
    //             api.clearToken();
    //             localStorage.removeItem(_tokenStorageKey);
    //             runInAction(() => {
    //                 this.isAuth = false;
    //             });

    //             // Redirect
    //             history.push('/');

    //             stores.ProfileStore.resetStore();
    //             stores.HeaderStore.menuClose();

    //             showNotification('success', response.data?.message || '');
    //         }
    //     })
    //     .finally(() => {
    //         runInAction(() => {
    //             this.loading = false;
    //         });
    //     });
  };

  @action
  checkAuth = () => {
    const token = JSON.parse(localStorage.getItem(_tokenStorageKey) || "null");

    // if (token) {
    //     api.setToken(token);
    //     this.isAuth = true;

    //     return true;
    // }

    this.isAuth = false;
    this.completeCheckAuth = true;

    return false;
  };

  @action
  setCompleteCheckAuth = (value: boolean) => {
    this.completeCheckAuth = value;
  };

  @action
  resetErrors = () => {
    this.errorMessages = {};
  };
}

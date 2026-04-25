import {
  buildLocaleMenuItems,
  buildPortalArticleURL,
  buildPortalURL,
} from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.nerixConfig = {
        hostURL: 'https://app.nerix.com',
        helpCenterURL: 'https://help.nerix.com',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.nerix.com/hc/handbook'
      );
      window.nerixConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.nerixConfig = {
        hostURL: 'https://app.nerix.com',
        helpCenterURL: 'https://help.nerix.com',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.nerix.com/hc/handbook/articles/article-slug');
      window.nerixConfig = {};
    });

    it('returns the correct url with custom domain', () => {
      window.nerixConfig = {
        hostURL: 'https://app.nerix.com',
        helpCenterURL: 'https://help.nerix.com',
      };
      expect(
        buildPortalArticleURL(
          'handbook',
          'culture',
          'fr',
          'article-slug',
          'custom-domain.dev'
        )
      ).toEqual('https://custom-domain.dev/hc/handbook/articles/article-slug');
    });

    it('handles https in custom domain correctly', () => {
      window.nerixConfig = {
        hostURL: 'https://app.nerix.com',
        helpCenterURL: 'https://help.nerix.com',
      };
      expect(
        buildPortalArticleURL(
          'handbook',
          'culture',
          'fr',
          'article-slug',
          'https://custom-domain.dev'
        )
      ).toEqual('https://custom-domain.dev/hc/handbook/articles/article-slug');
    });

    it('uses hostURL when helpCenterURL is not available', () => {
      window.nerixConfig = {
        hostURL: 'https://app.nerix.com',
        helpCenterURL: '',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://app.nerix.com/hc/handbook/articles/article-slug');
    });
  });

  describe('buildLocaleMenuItems', () => {
    it('returns disabled actions for the default locale', () => {
      expect(
        buildLocaleMenuItems({
          isDefault: true,
          isDraft: false,
        })
      ).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ action: 'change-default', disabled: true }),
          expect.objectContaining({ action: 'move-to-draft', disabled: true }),
          expect.objectContaining({ action: 'delete', disabled: true }),
        ])
      );
    });

    it('returns publish and delete actions for draft locales', () => {
      expect(
        buildLocaleMenuItems({
          isDefault: false,
          isDraft: true,
        }).map(({ action }) => action)
      ).toEqual(['publish-locale', 'delete']);
    });

    it('returns default, draft, and delete actions for live locales', () => {
      expect(
        buildLocaleMenuItems({
          isDefault: false,
          isDraft: false,
        }).map(({ action }) => action)
      ).toEqual(['change-default', 'move-to-draft', 'delete']);
    });
  });
});

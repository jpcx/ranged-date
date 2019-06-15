# Changelog

## <a name="2.1.0"></a> [2.1.0](https://github.com/jpcx/ranged-date/tree/2.1.0) (2019-06-15)

| __[Changes since 2.0.2](https://github.com/jpcx/ranged-date/compare/2.0.2...2.1.0)__ | [Release Notes](https://github.com/jpcx/ranged-date/releases/tag/2.1.0) | [README](https://github.com/jpcx/ranged-date/tree/2.1.0/README.md) |
| --- | --- | --- |

| [Source Code (zip)](https://github.com/jpcx/ranged-date/archive/2.1.0.zip) | [Source Code (tar.gz)](https://github.com/jpcx/ranged-date/archive/2.1.0.tar.gz) |
| --- | --- |

__Features:__

+ __docs:__ Added documentation for cert-is errors.
+ __npm:__  Added documentationjs fix script.
            Added dependency update script.
            Made postinstall migration warning more visible.

## <a name="2.0.2"></a> [2.0.2](https://github.com/jpcx/ranged-date/tree/2.0.2) (2019-06-13)

| __[Changes since 2.0.1](https://github.com/jpcx/ranged-date/compare/2.0.1...2.0.2)__ | [Release Notes](https://github.com/jpcx/ranged-date/releases/tag/2.0.2) | [README](https://github.com/jpcx/ranged-date/tree/2.0.2/README.md) |
| --- | --- | --- |

| [Source Code (zip)](https://github.com/jpcx/ranged-date/archive/2.0.2.zip) | [Source Code (tar.gz)](https://github.com/jpcx/ranged-date/archive/2.0.2.tar.gz) |
| --- | --- |

__Bugfixes:__

+ __docs/npm:__ Fixed documentationjs github hash link generation.

## <a name="2.0.1"></a> [2.0.1](https://github.com/jpcx/ranged-date/tree/2.0.1) (2019-06-13)

| __[Changes since 2.0.0](https://github.com/jpcx/ranged-date/compare/2.0.0...2.0.1)__ | [Release Notes](https://github.com/jpcx/ranged-date/releases/tag/2.0.1) | [README](https://github.com/jpcx/ranged-date/tree/2.0.1/README.md) |
| --- | --- | --- |

| [Source Code (zip)](https://github.com/jpcx/ranged-date/archive/2.0.1.zip) | [Source Code (tar.gz)](https://github.com/jpcx/ranged-date/archive/2.0.1.tar.gz) |
| --- | --- |

__Bugfixes:__

+ __npm:__       Fixed js-yaml dependency versions for documentationjs and eslint.
+ __changelog:__ Fixed bad version in 2.0.0 entry.

## <a name="2.0.0"></a> [2.0.0](https://github.com/jpcx/ranged-date/tree/2.0.0) (2019-06-13)

| __[Changes since 1.1.3](https://github.com/jpcx/ranged-date/compare/1.1.3...2.0.0)__ | [Release Notes](https://github.com/jpcx/ranged-date/releases/tag/2.0.0) | [README](https://github.com/jpcx/ranged-date/tree/2.0.0/README.md) |
| --- | --- | --- |

| [Source Code (zip)](https://github.com/jpcx/ranged-date/archive/2.0.0.zip) | [Source Code (tar.gz)](https://github.com/jpcx/ranged-date/archive/2.0.0.tar.gz) |
| --- | --- |

__Features:__

+ __ranged-date:__ Back and forward ranges are now mandatory (were 0.5 each by default in 1.x.x).
                   Date Objects with values outside of the specified range will return false (would return Date Object in 1.x.x).
+ __docs:__      Moved to documentationjs.
+ __tests:__     Moved to mocha.
+ __changelog:__ Added changelog.

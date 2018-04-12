#!/bin/bash
#
# This script updates the site with fresh doxygen documentation.
#

SCRIPT=$(basename $BASH_SOURCE)
ROOTDIR=$(cd $(dirname $BASH_SOURCE); pwd)
TSDUCKDIR=$(cd $ROOTDIR/..; pwd)/tsduck

error() { echo >&2 "$SCRIPT: $*"; exit 1; }

# Generate doxygen documentation in tsduck repository.

[[ -e $TSDUCKDIR/Makefile ]] || error "tsduck repository not found in $TSDUCKDIR"
make -C $TSDUCKDIR doxygen || error "doxygen error"
[[ -d $TSDUCKDIR/doxy/html ]] || error "$TSDUCKDIR/doxy/html not found"

# Move doxygen documentation in current repository.

cd $ROOTDIR
rm -rf doxy
mv $TSDUCKDIR/doxy . || exit 1

# Update git repository.

if [[ -n "$(git status --short | head -1)" ]]; then
    git add .
    git commit -m 'Doxygen update'
    git push origin master
fi
